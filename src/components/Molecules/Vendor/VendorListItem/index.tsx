import * as S from './styles' /** S = Styles */
import { Vendors } from 'types/vendors'
import MediaQuery from 'components/Helpers/MediaQuery'
import Button from 'components/Atoms/Button'
import Icon from 'components/Atoms/Icon'
import Status from 'components/Molecules/Status'
import Typography from 'components/Atoms/Typography'
import { IconButton } from '@material-ui/core'
import React from 'react'

type VendorListItemProps = {
  vendor: Vendors
  onStatusClick?: (status: Vendors['status']['type']) => void
  onActionClick?: (event: React.SyntheticEvent) => void
}

const VendorListItem = ({
  vendor,
  onStatusClick,
  onActionClick,
  ...props
}: VendorListItemProps) => (
  <S.Wrapper {...props}>
    <S.TitleWrapper>
      <MediaQuery greaterThan="medium">
        <Typography color="primary" variant="h2">
          {vendor.corporateName}
        </Typography>
      </MediaQuery>
      <MediaQuery lessThan="medium">
        <Typography color="primary" variant="h6">
          {vendor.corporateName}
        </Typography>
      </MediaQuery>
    </S.TitleWrapper>

    <S.ActionWrapper>
      <S.StatusWrapper>
        <MediaQuery greaterThan="medium">
          <span style={{ width: '25rem' }}>
            <Status
              onClick={onStatusClick}
              type={vendor.status.type}
              text={vendor.status.text}
            />
          </span>
        </MediaQuery>
        <MediaQuery lessThan="medium">
          <Status onClick={onStatusClick} type={vendor.status.type} />
        </MediaQuery>
      </S.StatusWrapper>
      <S.ShowWrapper>
        <MediaQuery greaterThan="large">
          <Button onClick={onActionClick}>Visualizar</Button>
        </MediaQuery>
        <MediaQuery lessThan="large">
          <IconButton onClick={onActionClick}>
            <Icon
              name="IosArrowRight"
              type="regular"
              variant="primary"
              size={20}
            />
          </IconButton>
        </MediaQuery>
      </S.ShowWrapper>
    </S.ActionWrapper>
  </S.Wrapper>
)

export default VendorListItem
