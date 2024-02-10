import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { TeamCard, Info } from "./index";

export const Team = () => {
  const [teachers, setTeachers] = useState([]);
  const teamRef = collection(db, "team");

  useEffect(() => {
    async function fetchTeacher() {
      const data = await getDocs(teamRef);
      setTeachers(data.docs.map((document) => (
        { ...document.data(), id: document.id }
      )));
    }
    console.log('-----');
    fetchTeacher();
  }, [])

  return (
    <div className="relative">
      <Info />
      <div className="p-8 my-8 bg-green-50 border">
        <p className="pb-8 text-center text-xl font-bold">Our Teaching Staff </p>
        <section id="teamGrid" className="bg-green-50 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {teachers.map((teacher) => (
            <TeamCard key={teacher.id} id={teacher.id} name={teacher.name} photo={teacher.photo} position={teacher.position} joiningDate={teacher.joiningDate} info={teacher.info} />
          ))}
        </section >
      </div >
    </div>
  )
}
