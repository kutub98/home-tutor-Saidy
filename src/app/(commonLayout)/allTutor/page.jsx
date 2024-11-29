"use client";

import { useState, useEffect } from "react";
import { FaRegUser } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { IoCloseSharp } from "react-icons/io5";

const AllTutor = () => {
  const [allTutors, setAllTutors] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);

  useEffect(() => {
    async function fetchTutors() {
      try {
        const res = await fetch(
          "https://home-tutor-server.vercel.app/api/v1/users"
        );
        const data = await res.json();
        setAllTutors(data);
      } catch (error) {
        console.error("Error fetching tutors:", error);
      }
    }
    fetchTutors();
  }, []);

  if (!allTutors) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium text-gray-600 animate-pulse">
          Loading tutors...
        </p>
      </div>
    );
  }

  const users = allTutors.data || [];
  const tutors = users.filter((user) => user.tutor); // Filter only users who are tutors
  const isTutorExist = tutors.length > 0;

  return (
    <div className="customWidth mx-auto px-4 py-6 md:px-8">
      <h1 className="text-2xl font-semibold text-center mb-6">
        Total Tutors: {tutors.length}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isTutorExist ? (
          tutors.map((user, index) => {
            const tutorDetails = user.tutor;

            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition duration-200"
              >
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-4">
                  {user.img && (
                    <FaRegUser className="h-16 w-16 text-gray-400" />
                  )}
                  <div>
                    <h2 className="font-bold text-lg">{user.username}</h2>
                    <h3 className="text-sm text-gray-500">
                      ID: {user.id || "N/A"}
                    </h3>
                  </div>
                </div>

                {/* Education Information */}
                {tutorDetails.educationRelated?.[0] ? (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-700">Education:</h3>
                    <ul className="text-sm text-gray-600">
                      <li>
                        Level:{" "}
                        {tutorDetails.educationRelated[0].levelOfEducation}
                      </li>
                      <li>
                        Degree:{" "}
                        {tutorDetails.educationRelated[0].examDegreeTitle}
                      </li>
                      <li>
                        Institute: {tutorDetails.educationRelated[0].institute}
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">
                    No education data available.
                  </p>
                )}

                <div className="flex justify-between gap-2">
                  <Button className="primaryBg hover:bg-green-600 text-white px-3 py-2 rounded w-full">
                    Hire Tutor
                  </Button>
                  <Button
                    onClick={() => setSelectedTutor(tutorDetails)}
                    className="secondaryBg hover:bg-green-600 text-white px-3 py-2 rounded w-full"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center">
            No tutors are available at the moment.
          </p>
        )}
      </div>

      {/* Modal for Additional Tutor Details */}
      {selectedTutor && (
        <div className="fixed inset-0 overflow-y-auto bg-black bg-opacity-50 flex justify-center items-center z-[10000]">
          <div className="bg-white max-w-3xl w-full mx-4 rounded-lg p-6 relative">
            {/* Close Button */}
            <IoCloseSharp
              className="h-8 w-8 absolute top-4 right-4 text-gray-600 hover:text-red-500 cursor-pointer"
              onClick={() => setSelectedTutor(null)}
            />

            <h2 className="text-2xl font-bold mb-6 text-center">
              Tutor Details
            </h2>

            {/* Availability Information */}
            {selectedTutor.tuitionRelated?.availabilityInformation?.[0] ? (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700">Availability:</h3>
                <ul className="text-sm text-gray-600">
                  <li>
                    <strong>City:</strong>{" "}
                    {selectedTutor.tuitionRelated.availabilityInformation[0]
                      .city || "N/A"}
                  </li>
                  <li>
                    <strong>Preferred:</strong>{" "}
                    {selectedTutor.tuitionRelated.availabilityInformation[0]
                      .preferred || "N/A"}
                  </li>
                  <li>
                    <strong>Available Days:</strong>{" "}
                    {selectedTutor.tuitionRelated.availabilityInformation[0].availableDays?.join(
                      ", "
                    ) || "N/A"}
                  </li>
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No availability information available.
              </p>
            )}

            {/* Other Information */}
            {selectedTutor.tuitionRelated?.otherInformation ? (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-700">
                  Other Information:
                </h3>
                <ul className="text-sm text-gray-600">
                  <li>
                    <strong>Preferred Categories:</strong>{" "}
                    {selectedTutor.tuitionRelated.otherInformation.preferredCategories?.join(
                      ", "
                    ) || "N/A"}
                  </li>
                  <li>
                    <strong>Preferred Classes:</strong>{" "}
                    {selectedTutor.tuitionRelated.otherInformation.preferredClasses?.join(
                      ", "
                    ) || "N/A"}
                  </li>
                  <li>
                    <strong>Preferred Subjects:</strong>{" "}
                    {selectedTutor.tuitionRelated.otherInformation.preferredSubjects?.join(
                      ", "
                    ) || "N/A"}
                  </li>
                  <li>
                    <strong>Places of Tutoring:</strong>{" "}
                    {selectedTutor.tuitionRelated.otherInformation.placeOfTutoring?.join(
                      ", "
                    ) || "N/A"}
                  </li>
                </ul>
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No additional information available.
              </p>
            )}

            <Button
              onClick={() => setSelectedTutor(null)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTutor;
