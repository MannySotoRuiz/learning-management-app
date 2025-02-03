import { Request, Response } from "express";
import Course from "../models/courseModel";

export const listCourses = async (
  req: Request,
  res: Response
): Promise<void> => {
  // https://example.com/path?key1=value1&key2=value2
  const { category } = req.query; // query used for optional params
  try {
    const courses =
      category && category !== "all"
        ? await Course.scan("category").eq(category).exec()
        : await Course.scan().exec();

    res.json({ message: "Courses retrieved successfully", data: courses });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving courses list", error });
  }
};

export const getCourse = async (req: Request, res: Response): Promise<void> => {
  // https://example.com/path/{param}
  const { courseId } = req.params; // param used for required params
  try {
    const course = await Course.get(courseId);
    if (!course) {
      res.status(404).json({ message: "Course not found" });
      return;
    }

    res.json({ message: "Course retrieved successfully", data: course });
  } catch (error) {
    res.status(500).send({ message: "Error retrieving course", error });
  }
};

// export const name = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   try {

//   } catch (error) {
//    res.status(500).send({ message: "Error" })
//   }
// }
