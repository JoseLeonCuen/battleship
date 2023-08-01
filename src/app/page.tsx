import React from "react";
import Board from "../../components/Board";

export default function Home() {
  return (
    <main className="">
      <Board rows={2} columns={2} />
    </main>
  )
}
