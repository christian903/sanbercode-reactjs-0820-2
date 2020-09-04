import React, { Component } from 'react'

class Tugas10 extends Component {
    constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
        dataHargaBuah: [
            {nama: "Semangka", harga: 10000, berat: 1000},
            {nama: "Anggur", harga: 40000, berat: 500},
            {nama: "Strawberry", harga: 30000, berat: 400},
            {nama: "Jeruk", harga: 30000, berat: 1000},
            {nama: "Mangga", harga: 30000, berat: 500}
        ]
    }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.dataHargaBuah[0])
        return header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
     }

     renderTableData() {
        return this.state.dataHargaBuah.map((dataHargaBuah, index) => {
           const { nama, harga, berat } = dataHargaBuah //destructuring
           return (
              <tr>
                 <td>{nama}</td>
                 <td>{harga}</td>
                 <td>{berat}</td>
              </tr>
           )
        })
     }
  
     render() {
        return (
           <div>
              <h1 id='title'>Tabel Harga Buah</h1>
              <table id='buah'>
                 <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }
}

export default Tugas10;