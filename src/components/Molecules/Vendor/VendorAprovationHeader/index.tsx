import * as S from './styles' /** S = Styles */
import Button from 'components/Atoms/Button'
import Typography from 'components/Atoms/Typography'
import { Vendors } from 'types/vendors'
import Status from 'components/Molecules/Status'
import React from 'react'

export type VendorAprovationHeaderProps = {
  vendor: Vendors
  showAction?: boolean
  onAprove?: (ev: React.SyntheticEvent) => void
  onReject?: (ev: React.SyntheticEvent) => void
}

const VendorAprovationHeader = ({
  vendor,
  showAction = false,
  onAprove,
  onReject,
  ...props
}: VendorAprovationHeaderProps) => {
  return (
    <S.Wrapper {...props}>
      <Typography color="primary" variant="h3">
        {vendor.corporateName}
      </Typography>

      <S.StatusWrapper>
        <Status type={vendor.status.type} text={vendor.status.text} />
      </S.StatusWrapper>

      <S.ActionWrapper>
        {showAction && (
          <>
            <S.ActionItem>
              <Button onClick={onReject} variant="outlined" color="error">
                Rejeitar Cadastro
              </Button>
            </S.ActionItem>
            <S.ActionItem>
              <Button onClick={onAprove}>Aprovar Cadastro</Button>
            </S.ActionItem>
          </>
        )}
      </S.ActionWrapper>
    </S.Wrapper>
  )
}

export default VendorAprovationHeader
