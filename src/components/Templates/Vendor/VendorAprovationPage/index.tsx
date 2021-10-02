import * as S from './styles' /** S = Styles */
import { Vendors } from 'types/vendors'
import VendorForm from 'components/Molecules/Vendor/VendorForm'
import React from 'react'

export type VendorAprovationPageProps = {
  vendor: Vendors
}

const VendorAprovationPage = ({ vendor }: VendorAprovationPageProps) => {
  const aproveVendor = () => null
  const rejectVendor = () => null

  return (
    <S.Wrapper maxWidth="lg">
      <S.Header
        vendor={vendor}
        showAction={true}
        onAprove={aproveVendor}
        onReject={rejectVendor}
      ></S.Header>
      <S.FormWrapper>
        <VendorForm vendor={vendor} disabled />
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default VendorAprovationPage
