import React from 'react'


const Table = (props) => {
  const { items, handledelete } = props
  
  
  return (
    <div className='table'>
      <table border="1">
        <thead>
          <tr>
            <th>Дата(ДД.ММ.ГГ)</th>
            <th>Пройдено км</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => (
          <tr key={JSON.stringify(item)}>
            <td>{item.date}</td>
            <td>{item.range}</td>
            <td>
              <button onClick={() => handledelete(item)}>
                X
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table