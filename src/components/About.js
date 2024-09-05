import React from "react";
import { useContext } from "react";
import NoteContext from "../contexts/NoteContext";
import logo from "../AboutCloudbook2.gif";

export default function About() {
  // eslint-disable-next-line
  const a = useContext(NoteContext);
  return (
    <div className="container d-flex">
      <div className="container p-2 flex-grow-1 my-5">
        <h1 className="fw-bold">ScribbleSync</h1>
        <h2 className="fw-semibold fst-italic"> Effortlessly sync your notes in the cloud—accessible anywhere, anytime, forever.</h2>
        <div className="my-3">
          <div className="fs-2 fw-light">Secure, Smart, and Always by your side.</div>
          {/* <p className="">Developed in MERN Stack with Bootstrap v5.2</p> */}
        </div>
      </div>
      <div className="block w-[200px] h-[200px]"></div>
    </div>
  );
}
