import React from 'react'

export default function IzinForm() {
const date = new Date();
const dateI = date.toLocaleDateString();
const tablo1Var = {devr2021:-6.5, hak2022:14, hakGun:28,kullGun:5.50,kalanBak:22.50,kullBak:16.00 };
const yillikİzinler =[["5.05.2022","6.05.2022"],["8.07.2022","8.07.2022"],["13.07.2022", "14.07.2022"],["29.08.20", "29.08.2020"]];

return (
<div className='izinForm'>
<h1 className='ibaslik' >İzin Mutabakat Formu</h1>
<h4 className='tarih'> {dateI} </h4>
    <p>Sayin<br/><br/>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero. <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.<span>&#40;</span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.<span>&#41;</span><br/><br/>

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et massa ultricies, sodales orci eu, tincidunt libero.
    </p>


<table>
  <th colspan="7"> Tablo-1</th>
  <tr>
    <th><pre>               </pre></th>
    <th>2021 Yılından Devreden Bakiye</th>
    <th>2022 Yılı Hakedişi</th>
    <th>Hakedilen Gün</th>
    <th>Kullanılan Gün</th>
    <th>Kalan Bakiye</th>
    <th>Kullanılabilir Bakiye</th>
  </tr>
  <tr>
    <td>190010259904849030</td>
    <td>{tablo1Var.devr2021}</td>
    <td>{tablo1Var.hak2022}</td>
    <td>{tablo1Var.hakGun}</td>
    <td>{tablo1Var.kullGun}</td>
    <td>{tablo1Var.kalanBak}</td>
    <td>{tablo1Var.kullBak}</td>
  </tr>
</table>


<br/><br/>



<table className='table2'>
<th  className='tdd'colspan="7"> Tablo-2</th>

<tr>
  <th><pre></pre></th>
  <th><pre></pre></th>
  <th><pre></pre></th>
  <th className='tdd'>Kullanılan İzin Günü</th>
</tr>
<tr>
  <td className='tdd'>190010259904849030</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
</tr>
<tr>
  <td className='tdd'>190010259904849030</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
</tr>
<tr>
  <td className='tdd'>190010259904849030</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
</tr>
<tr>
  <td className='tdd'>190010259904849030</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
  <td className='tdd'>deger</td>
</tr>
</table>


<br/><br/><br/><br/><br/><br/><br/>
<p>Yillik Izin Bakivesi <span>&#40;</span>Tablo-1<span>&#41;</span> ve Izin Detay Listesi <span>&#40;</span> Tablo-2<span>&#41;</span> tablolarinda belirtilen kullandigim tüm izin detaylarinin dogru olduğunu beyan eder ve yillik izin bakiyemde mutabik oldugumu kabul ederim</p>
<br/><br/>
<p>Tarih:</p>
<p>Çalışan İmza:</p>
</div>
  )
}
