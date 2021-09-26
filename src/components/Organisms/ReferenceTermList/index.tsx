import * as S from './styles' /** S = Styles */

import { GenerateVendorHeader, GenerateVendorRows } from './generator'
import { ReferenceTerms } from 'types/reference-term'

type ReferenceTermListProps = {
  termsData: ReferenceTerms[]
}

const ReferenceTermList = ({ termsData }: ReferenceTermListProps) => {
  const header = GenerateVendorHeader()
  const rows = GenerateVendorRows(termsData)

  return <S.Wrapper rows={rows} header={header} />
}

export default ReferenceTermList
