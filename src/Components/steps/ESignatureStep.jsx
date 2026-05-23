import { useRef, useState } from "react";

import SignatureCanvas from "react-signature-canvas";

import { useLoanForm } from "../../context/LoanFormContext";

function ESignatureStep() {
  const { updateFormData } =
    useLoanForm();

  const signatureRef = useRef();

  const [savedSignature, setSavedSignature] =
    useState("");

  const clearSignature = () => {
    signatureRef.current.clear();

    setSavedSignature("");
  };

  const saveSignature = () => {
    const signatureImage =
      signatureRef.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    setSavedSignature(signatureImage);

    updateFormData({
      signature: signatureImage,
    });

    alert("Signature Saved");
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        E-Signature
      </h2>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
          <SignatureCanvas
            ref={signatureRef}
            penColor="black"
            canvasProps={{
              width: 500,
              height: 200,
              className:
                "signature-canvas w-full",
            }}
          />
        </div>

        <div className="flex gap-4 mt-4">
          <button
            onClick={clearSignature}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600"
          >
            Clear
          </button>

          <button
            onClick={saveSignature}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Save Signature
          </button>
        </div>

        {savedSignature && (
          <div className="mt-6">
            <h3 className="font-bold text-lg mb-3">
              Signature Preview
            </h3>

            <img
              src={savedSignature}
              alt="Signature"
              className="border rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ESignatureStep;