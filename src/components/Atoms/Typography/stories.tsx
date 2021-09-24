import Typography, { TypographyPropsBase } from '.'
import { Meta, Story } from '@storybook/react/types-6-0'

export default {
  title: 'Design System/Atoms/Typography',
  component: Typography,
  argTypes: {
    children: {
      type: 'string'
    },
    variant: { table: { disable: true } }
  },
  args: {
    children: 'Typography',
    color: 'primary'
  }
} as Meta

export const Basic: Story<TypographyPropsBase> = ({ color, children }) => (
  <>
    <Typography color={color} variant="h1">
      H1 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="h2">
      H2 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="h3">
      H3 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="h4">
      H4 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="h5">
      H5 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="h6">
      H6 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="body1">
      Body1 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="body2">
      Body2 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="subtitle1">
      Subtitle1 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="subtitle2">
      Subtitle2 - {children}
    </Typography>
    <br />
    <Typography color={color} variant="button">
      Button - {children}
    </Typography>
    <br />
    <Typography color={color} variant="caption">
      Caption - {children}
    </Typography>
    <br />
    <Typography color={color} variant="overline">
      Overline - {children}
    </Typography>
    <br />
  </>
)
