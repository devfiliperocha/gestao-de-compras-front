/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as S from './styles' /** S = Styles */
import React, { useContext, useState } from 'react'
import { Container } from '@material-ui/core'
import { AppContext } from 'contexts/app'
import Button from 'components/Atoms/Button'
import Modal from 'components/Atoms/Modal'
import VendorForm from '../Form'
import { VendorContext } from '../../context/vendor'
import VendorAprovationHeader from '../AprovationHeader'
import useTitle from 'Hooks/useTitle'

const VendorPage = () => {
  const { vendor, updateVendorStatus, setFormData, updateDocStatus, errors } =
    useContext(VendorContext)
  const { isContainerLoading } = useContext(AppContext)
  const [isConfirmModalOpen, openConfirmModal] = useState(false)
  const [isRemoveModalOpen, openRemoveModal] = useState(false)

  useTitle(`Órgãos > ${vendor.corporateName || ''}`)

  return (
    <S.Wrapper maxWidth="lg">
      {!isContainerLoading && (
        <>
          <VendorAprovationHeader
            showAction={true}
            vendor={vendor}
            onAprove={() => {
              openConfirmModal(true)
            }}
            onReject={() => {
              openRemoveModal(true)
            }}
          ></VendorAprovationHeader>
          <VendorForm
            vendor={vendor}
            onUpdateForm={setFormData}
            disabled
            errors={errors}
            onUpdateDocument={updateDocStatus}
          />
          <Modal
            title="Aprovar Fornecedor?"
            open={isConfirmModalOpen}
            onClose={() => openConfirmModal(false)}
            action={
              <S.Actions>
                <Button
                  onClick={() => openConfirmModal(false)}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
                <Button onClick={() => updateVendorStatus('success')}>
                  Confirmar
                </Button>
              </S.Actions>
            }
          >
            <Container maxWidth="lg">
              Tem certeza que deseja aprovar o cadastro desse fornecedor?
            </Container>
          </Modal>

          <Modal
            title="Rejeitar Fornecedor?"
            open={isRemoveModalOpen}
            onClose={() => openRemoveModal(false)}
            action={
              <S.Actions>
                <Button
                  onClick={() => openRemoveModal(false)}
                  variant="outlined"
                  color="error"
                >
                  Cancelar
                </Button>
                <Button onClick={() => updateVendorStatus('error')}>
                  Rejeitar
                </Button>
              </S.Actions>
            }
          >
            <Container maxWidth="lg">
              Tem certeza que deseja rejeitar o cadastro desse fornecedor?
            </Container>
          </Modal>
        </>
      )}
    </S.Wrapper>
  )
}

export default VendorPage
