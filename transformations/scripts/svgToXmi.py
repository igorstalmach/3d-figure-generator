import math
import xml.etree.ElementTree as ET
from typing import Type, TypeVar, Dict, List, Tuple

T = TypeVar("T", int, float)

DIVIDE_MULTIPLIER = 10
DEPTH_MULTIPLIER = 5

SODIPODI_NAMESPACE = "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
ET.register_namespace("sodipodi", SODIPODI_NAMESPACE)


def parse_style(style_str: str) -> Dict[str, str]:
    styles = style_str.split(";")
    style_dict = {}
    for style in styles:
        if ":" in style:
            key, value = style.split(":")
            style_dict[key.strip()] = value.strip()
    return style_dict


def get_color(style_dict: Dict[str, str]) -> str:
    return style_dict.get("fill", "#000000")


def get_rotation(transform_str: str) -> Tuple[float, float, float]:
    if transform_str and "rotate" in transform_str:
        start = transform_str.find("rotate(") + len("rotate(")
        end = transform_str.find(")", start)
        rotation_values = transform_str[start:end].split(",")
        rotation = abs(float(rotation_values[0]))
        return rotation, rotation, rotation
    return 0.0, 0.0, 0.0


def get_title_value(element: ET.Element, default_value: float) -> float:
    title_elem = element.find("{http://www.w3.org/2000/svg}title")
    if title_elem is not None and title_elem.text:
        try:
            return float(title_elem.text)
        except ValueError:
            return default_value
    return default_value


def cap_value(
    value, multiplier: int = DIVIDE_MULTIPLIER, return_type: Type[T] = float
) -> T:
    divided_value = float(value) / multiplier
    if return_type is int:
        return return_type(math.ceil(divided_value))
    return return_type(divided_value)


def convert_depth(value: int) -> float:
    return float((value - 1) * DEPTH_MULTIPLIER)


def convert_svg_to_model(svg_root: ET.Element) -> List[str]:
    shapes = []

    def traverse(node: ET.Element, depth: int = 1):
        for elem in node:
            if elem.tag.endswith("g"):
                traverse(elem, depth + 1)
            elif elem.tag.endswith("ellipse"):
                style_dict = parse_style(elem.attrib["style"])
                color = get_color(style_dict)
                posX = cap_value(elem.attrib["cx"])
                posY = cap_value(elem.attrib["cy"])
                posZ = convert_depth(depth)
                rotSpeedX, rotSpeedY, rotSpeedZ = get_rotation(
                    elem.attrib.get("transform", "")
                )
                radius = cap_value(elem.attrib["rx"], return_type=int)
                shapes.append(
                    f"""
  <sphere color="{color}">
    <posX>{posX}</posX>
    <posY>{posY}</posY>
    <posZ>{posZ}</posZ>
    <rotSpeedX>{rotSpeedX}</rotSpeedX>
    <rotSpeedY>{rotSpeedY}</rotSpeedY>
    <rotSpeedZ>{rotSpeedZ}</rotSpeedZ>
    <radius>{radius}</radius>
  </sphere>
                    """
                )
            elif elem.tag.endswith("rect"):
                style_dict = parse_style(elem.attrib["style"])
                color = get_color(style_dict)
                posX = cap_value(elem.attrib["x"])
                posY = cap_value(elem.attrib["y"])
                posZ = convert_depth(depth)
                rotSpeedX, rotSpeedY, rotSpeedZ = get_rotation(
                    elem.attrib.get("transform", "")
                )
                sizeX = cap_value(elem.attrib["width"], return_type=int)
                sizeY = cap_value(elem.attrib["height"], return_type=int)
                sizeZ = cap_value(get_title_value(elem, posX), return_type=int)
                shapes.append(
                    f"""
  <box color="{color}">
    <posX>{posX}</posX>
    <posY>{posY}</posY>
    <posZ>{posZ}</posZ>
    <rotSpeedX>{rotSpeedX}</rotSpeedX>
    <rotSpeedY>{rotSpeedY}</rotSpeedY>
    <rotSpeedZ>{rotSpeedZ}</rotSpeedZ>
    <sizeX>{sizeX}</sizeX>
    <sizeY>{sizeY}</sizeY>
    <sizeZ>{sizeZ}</sizeZ>
  </box>
                    """
                )
            elif elem.tag.endswith("path"):
                style_dict = parse_style(elem.attrib["style"])
                color = get_color(style_dict)
                posX = cap_value(elem.attrib[f"{{{SODIPODI_NAMESPACE}}}cx"])
                posY = cap_value(elem.attrib[f"{{{SODIPODI_NAMESPACE}}}cy"])
                posZ = convert_depth(depth)
                rotSpeedX, rotSpeedY, rotSpeedZ = get_rotation(
                    elem.attrib.get("transform", "")
                )
                sizeX = cap_value(
                    elem.attrib[f"{{{SODIPODI_NAMESPACE}}}r1"], return_type=int
                )
                sizeY = cap_value(get_title_value(elem, posX), return_type=int)
                sizeZ = elem.attrib[f"{{{SODIPODI_NAMESPACE}}}sides"]
                shapes.append(
                    f"""
  <pyramid color="{color}">
    <posX>{posX}</posX>
    <posY>{posY}</posY>
    <posZ>{posZ}</posZ>
    <rotSpeedX>{rotSpeedX}</rotSpeedX>
    <rotSpeedY>{rotSpeedY}</rotSpeedY>
    <rotSpeedZ>{rotSpeedZ}</rotSpeedZ>
    <sizeX>{sizeX}</sizeX>
    <sizeY>{sizeY}</sizeY>
    <sizeZ>{sizeZ}</sizeZ>
  </pyramid>
                    """
                )

    traverse(svg_root)
    return shapes


def main(svg_file: str):
    with open(svg_file, "r") as file:
        svg_content = file.read()

    svg_root = ET.fromstring(svg_content)

    shapes = convert_svg_to_model(svg_root)

    model_output = f"""<?xml version="1.0" encoding="UTF-8"?>
<shapesMetamodel:Application xmi:version="2.0" xmlns:xmi="http://www.omg.org/XMI" xmlns:shapesMetamodel="http://www.example.org/shapesMetamodel">
{''.join(shapes)}
</shapesMetamodel:Application>
    """
    print(model_output)


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(description="Convert SVG to XMI")
    parser.add_argument("svg_file", help="Path to the input SVG file")
    args = parser.parse_args()
    main(args.svg_file)
