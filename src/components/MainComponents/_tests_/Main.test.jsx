import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import TaskElement from "../TaskElement/TaskElement";
import { BrowserRouter, Routes, Route } from "react-router-dom"

describe('test a TaskElement', function () {
  it('should be have class and visible', function () {

    const { getByTestId } = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskElement name={"TestValue"} element={{id: 1}}/>}/>
      </Routes>
    </BrowserRouter>)

    const div = getByTestId("testdiv")

    expect(div).toBeVisible()
    expect(div).toHaveClass("task_main_container")
  });
  it('should be with right text', function () {

    const { getByText } = render(<BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskElement name={"TestValue"} element={{id: 1, title: "TestValue"}}/>}/>
      </Routes>
    </BrowserRouter>)

    const div = getByText("TestValue")

    expect(div).toBeVisible()
  });
})

