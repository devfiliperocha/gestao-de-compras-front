/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */
import VendorForm from 'components/Molecules/Vendor/VendorForm'
import React, { useContext } from 'react'
import { VendorContext } from 'contexts/vendor'
import VendorAprovationHeader from 'components/Molecules/Vendor/VendorAprovationHeader'
import { AppContext } from 'contexts/app'

const VendorAprovationPage = () => {
  const { updateVendorStatus, vendor, updateDocStatus, updateFormData } =
    useContext(VendorContext)

  const { isContainerLoading } = useContext(AppContext)

  return (
    <S.Wrapper maxWidth="lg">
      {!isContainerLoading && (
        <>
          <VendorAprovationHeader
            showAction={true}
            vendor={vendor}
            onAprove={() => {
              updateVendorStatus('success')
            }}
            onReject={() => {
              updateVendorStatus('error')
            }}
          ></VendorAprovationHeader>

          <VendorForm
            vendor={vendor}
            onUpdateForm={updateFormData}
            onUpdateDocument={updateDocStatus}
            disabled
          />
        </>
      )}
    </S.Wrapper>
  )
}

export default VendorAprovationPage
