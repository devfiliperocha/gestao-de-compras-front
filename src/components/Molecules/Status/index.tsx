import * as S from './styles' /** S = Styles */
import Icon from 'components/Atoms/Icon'
import React from 'react'

export type StatusProps = {
  type: 'error' | 'warning' | 'success'
  text?: string
  onClick?: (status: StatusProps['type']) => void
}

const Status = ({ text, type, onClick = (v) => v, ...props }: StatusProps) => (
  <>
    {text ? (
      <S.Wrapper
        {...props}
        disableRipple
        onClick={() => onClick(type)}
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
      <S.IconWrapper {...props} onClick={() => onClick(type)}>
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
