import * as S from './styles' /** S = Styles */
import { useContext, useState } from 'react'
import Typography from 'components/Atoms/Typography'
import { sortOrgans } from 'components/Templates/Organ/OrganPage/utils'
import { OrgansContext } from 'contexts/organs'
import { useRouter } from 'next/router'
import EmptyState from 'components/Atoms/EmptyState'
import Button from 'components/Atoms/Button'

const OrganPage = () => {
  const { organs, setOrgans } = useContext(OrgansContext)
  const router = useRouter()

  const onOrganClick = (id: number) => {
    router.push(`/organ/${id}`)
    return
  }

  return (
    <S.Wrapper maxWidth="lg">
      <EmptyState
        title={
          <Typography variant="body2" color="primary">
            Você ainda não tem nenhum <strong>Órgão</strong> cadastrado. Clique
            em <strong>Cadastrar Órgão</strong>
          </Typography>
        }
        button={<Button>Cadastrar Órgão</Button>}
      />
    </S.Wrapper>
  )
}

export default OrganPage
