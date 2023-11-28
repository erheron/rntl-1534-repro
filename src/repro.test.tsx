import React from "react";
import { View } from "react-native";
import { render, screen } from "@testing-library/react-native";

describe("Test toHaveStyle matcher", () => {
  test("It is weird that Typescript fails here, although test passes in runtime", () => {
    const Component = <View testID="component" style={{ flex: 1 }} />;
    render(Component);
    const matchedComponent = screen.getByTestId("component");
    expect(matchedComponent).toHaveStyle({ flex: 1 });
  });
});
