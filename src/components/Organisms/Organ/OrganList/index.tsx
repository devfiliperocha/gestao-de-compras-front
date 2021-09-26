import * as S from './styles' /** S = Styles */

import { GenerateVendorHeader, GenerateVendorRows } from './generator'
import { Organs } from 'types/organ'

type OrganListProps = {
  organsData: Organs[]
}

const OrganList = ({ organsData }: OrganListProps) => {
  const header = GenerateVendorHeader()
  const rows = GenerateVendorRows(organsData)

  return <S.Wrapper rows={rows} header={header} />
}

export default OrganList
