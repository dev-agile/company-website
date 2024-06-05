import React from "react";
import "tailwindcss/tailwind.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "../../ui/movingBorder/moving-border";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  file: Yup.mixed().required("File is required"),
  estimatedBudget: Yup.number().required("Estimated budget is required"),
  priority: Yup.string().required("Priority is required"),
  country: Yup.string().required("Country is required"),
});

const ContactForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    console.log("Form data", values.firstName);

    const slackWebhookUrl = "https://hooks.slack.com/services/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";
    const message = {
      text: `New contact form submission from ${values.firstName} ${values.lastName}\nEmail: ${values.email}`,
    };

    try {
      const response = await fetch(slackWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(message),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error sending Slack notification:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-wrap -mx-2">
        <div className="w-full lg:w-1/2 mb-4">
          <div className="flex justify-center items-center flex-col ">
            <div className="border rounded-full sm:p-5 p-2 shadow-lg bg-gradient-to-r from-[#83aaff] to-[#254975]">
              <img
                src="https://samartheme2.vercel.app/images/team/large/pic3.jpg"
                alt="Profile"
                className="rounded-full w-72 h-72"
              />
            </div>
            <div className="w-full ">
              <div className="border rounded-full sm:p-5 p-2 w-64 h-64 shadow-lg bg-gradient-to-r from-[#83aaff] to-[#254975]">
                <img
                  src="https://samartheme2.vercel.app/images/team/large/pic2.jpg"
                  alt="Profile"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="border rounded-full sm:p-5 p-2 shadow-lg bg-gradient-to-r from-[#83aaff] to-[#254975]">
              <img
                src="https://samartheme2.vercel.app/images/team/large/pic1.jpg"
                alt="Profile"
                className="rounded-full w-48 h-48"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-2">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              projectTitle: "",
              service: "",
              message: "",
              file: null,
              estimatedBudget: "",
              priority: "",
              country: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue }) => (
              <Form className="sm:px-8 px-1 pt-6 pb-8 mb-4">
                <p className="text-3xl font-bold dark:text-white mb-6">
                  Contact form
                </p>
                <div className="mb-4 flex justify-between gap-2 sm:gap-7">
                  <Field
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <Field
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4 flex justify-between">
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="mb-4  flex justify-between gap-3 sm:gap-7">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Phone No."
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>

                <div className="mb-4 flex justify-between gap-3 sm:gap-7">
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4 flex justify-between gap-2 sm:gap-7">
                  <Field
                    name="projectTitle"
                    type="text"
                    placeholder="Project Title"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <Field
                    name="service"
                    as="select"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Choose Service</option>
                    <option value="service1">Service 1</option>
                    <option value="service2">Service 2</option>
                    <option value="service3">Service 3</option>
                  </Field>
                </div>

                <div className="mb-4 flex justify-between gap-2 sm:gap-7">
                  <ErrorMessage
                    name="projectTitle"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                  <ErrorMessage
                    name="service"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className="shadow appearance-none border rounded-lg h-40 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={(event) => {
                      setFieldValue("file", event.currentTarget.files[0]);
                    }}
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="file"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>
                <div className="mb-4">
                  <Field
                    name="estimatedBudget"
                    type="text"
                    placeholder="Estimated Budget"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="estimatedBudget"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    as="select"
                    name="priority"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                  </Field>
                  <ErrorMessage
                    name="priority"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    name="country"
                    type="text"
                    placeholder="Country"
                    className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-xs italic"
                  />
                </div>

                <Button
                  borderRadius="10px"
                  className="bg-transparent  text-blue-400 font-bold text-lg border-[1px] border-blue-400   dark:border-slate-800"
                >
                  Submit Now
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
