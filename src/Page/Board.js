import React from "react";
import { Table } from "reactstrap";

const Board = () => {
  const Board = [
    {
      brdno: 1,
      brdwriter: "Lee Sang Hyeong",
      brdtitle: "The Tyranny of Merit",
      brddate: new Date(),
    },
    {
      brdno: 2,
      brdwriter: "Shim Hea Jin",
      brdtitle: "How to Win Firends & Influence People",
      brddate: new Date(),
    },
  ];

  for (const property in Board) {
  }
  const boards = Board;
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>BookTitle</th>
          <th>author</th>
          <th>published</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>`${Board}`</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Board;
