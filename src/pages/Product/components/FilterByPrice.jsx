import * as React from 'react';


function FilterByPrice() {
  return (
    <div style={{ border: '1px solid lightgray', borderTop: 'none' }} className='product-filter-price'>
      <p className='b-gray box-background' style={{ padding: '10px 20px', fontWeight: 'bold', color: 'white' }}>BỘ LỌC</p>
      <div style={{ padding: '0 0 0 17px' }}>
        <p style={{ fontWeight: 'bold' }}>Tìm theo mức giá</p>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;Giá dưới 100.000đ</span>
        </div>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;100.000đ - 200.000đ</span>
        </div>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;200.000đ - 300.000đ</span>
        </div>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;300.000đ - 500.000đ</span>
        </div>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;500.000đ - 1.000.000đ</span>
        </div>
        <div style={{ margin: '15px 0', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" />
          <span>&nbsp;Giá trên 1.000.000đ</span>
        </div>
      </div>
    </div>
  )
}

export default FilterByPrice