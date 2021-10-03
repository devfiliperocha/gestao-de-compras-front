/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */
import VendorForm from 'components/Molecules/Vendor/VendorForm'
import React, { useContext } from 'react'
import { VendorContext } from 'contexts/vendor'
import VendorAprovationHeader from 'components/Molecules/Vendor/VendorAprovationHeader'

const VendorAprovationPage = () => {
  const context = useContext(VendorContext)

  return (
    <S.Wrapper maxWidth="lg">
      <VendorAprovationHeader
        showAction={true}
        onAprove={() => {
          context.updateVendorStatus('success')
        }}
        onReject={() => {
          context.updateVendorStatus('error')
        }}
      ></VendorAprovationHeader>
      <VendorForm disabled />
    </S.Wrapper>
  )
}

export default VendorAprovationPage
