import { useState } from "react";

import { useDropzone } from "react-dropzone";

import { useLoanForm } from "../../context/LoanFormContext";

function DocumentUploadStep() {
  const { updateFormData } =
    useLoanForm();

  const [uploadedFiles, setUploadedFiles] =
    useState([]);

  const onDrop = (acceptedFiles) => {
    const updatedFiles = [
      ...uploadedFiles,
      ...acceptedFiles,
    ];

    setUploadedFiles(updatedFiles);

    updateFormData({
      uploadedDocuments:
        updatedFiles,
    });
  };

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    onDrop,

    accept: {
      "image/*": [],
      "application/pdf": [],
    },

    maxSize: 5 * 1024 * 1024,
  });

  const removeFile = (fileName) => {
    const filteredFiles =
      uploadedFiles.filter(
        (file) =>
          file.name !== fileName
      );

    setUploadedFiles(filteredFiles);

    updateFormData({
      uploadedDocuments:
        filteredFiles,
    });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Step 7: Document Upload
      </h2>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-blue-400 rounded-xl p-10 text-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition"
      >
        <input {...getInputProps()} />

        <p className="text-gray-700 font-medium">
          Drag & Drop files here
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Upload Images or PDFs
          (Max 5MB)
        </p>
      </div>

      <div className="mt-6 space-y-4">
        {uploadedFiles.map((file) => (
          <div
            key={file.name}
            className="flex items-center justify-between bg-white shadow p-4 rounded-lg"
          >
            <div>
              <p className="font-medium">
                {file.name}
              </p>

              <p className="text-sm text-gray-500">
                {(
                  file.size /
                  1024 /
                  1024
                ).toFixed(2)}{" "}
                MB
              </p>
            </div>

            <button
              onClick={() =>
                removeFile(file.name)
              }
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocumentUploadStep;