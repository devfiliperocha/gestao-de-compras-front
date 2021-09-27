import * as S from './styles' /** S = Styles */
import Icon from 'components/Atoms/Icon'

export type StatusProps = {
  type: 'error' | 'warning' | 'success'
  text?: string
}

const Status = ({ text, type }: StatusProps) => (
  <>
    {text ? (
      <S.Wrapper
        disableRipple
        variant="text"
        color={type === 'warning' ? 'accent' : type}
        startIcon={
          <Icon
            variant={type === 'warning' ? 'accent' : type}
            size={40}
            name="Circle"
          />
        }
      >
        {text}
      </S.Wrapper>
    ) : (
      <S.IconWrapper>
        <Icon
          variant={type === 'warning' ? 'accent' : type}
          size={20}
          name="Circle"
        />
      </S.IconWrapper>
    )}
  </>
)

export default Status
