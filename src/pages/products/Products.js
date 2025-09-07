import React from 'react'
import ProductsList from "../../components/productsComponent/ProductsList"
import CuModal from '../../components/customModal/CuModal'

export default function Products() {
  return (
    <>
      <CuModal modalMode={"add"}></CuModal>
      <ProductsList></ProductsList>
    </>
  )
}
