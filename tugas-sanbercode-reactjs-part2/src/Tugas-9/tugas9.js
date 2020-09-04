import React from 'react';

class Tugas9 extends React.Component {
    render() {
      return (
        <div style={{width: '40%', margin: '0 Auto', border: '1px solid #000', borderRadius: '20px'}}>
        <h1 style={{textAlign:'center'}}>Form Pembelian Buah</h1>
        <div style={{padding: '20px', paddingTop: '0px'}}>
          <div style={{display: 'block', marginBottom: '1em'}}>
            <div style={{display: 'inline-block', width: '150px', fontWeight: 'bold', fontSize: '16px'}}>
              Nama Pelanggan
            </div>
            
            <input style={{display: 'inline-block'}} type="text" name="name" />
          </div>
          <div style={{display: 'block', marginBottom: '1em'}}>
            <div style={{display: 'inline-block', width: '150px', fontWeight: 'bold', fontSize: '16px'}}>
              Daftar Item 
            </div>
            <div style={{display: 'inline-block'}}>
              <input type="checkbox" name="semangka" value="semangka"/>
              <label>Semangka</label><br/>
              <input type="checkbox" name="jeruk" value="jeruk"/>
              <label>Jeruk</label><br/>
              <input type="checkbox" name="nanas" value="nanas"/>
              <label>Nanas</label><br/>
              <input type="checkbox" name="salak" value="salak"/>
              <label>Salak</label><br/>
              <input type="checkbox" name="anggur" value="anggur"/>
              <label>Anggur</label><br/>
            </div>
          </div>
          <button style={{background: 'white', borderRadius: '20px'}}>
            <a href="#" style={{textDecoration: 'none', color: 'black'}}>Kirim</a>
          </button>
        </div>
      </div>
      );

    }
  }

 
  
  export default Tugas9;