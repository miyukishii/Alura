import { ReactNode } from 'react';
import { IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import Icon from '@mui/material/Icon';
import { Box } from '@mui/system';

import { useDrawerContext } from '../contexts';

interface ILayoutBasePageProps {
  children: React.ReactNode;
  titulo: string;
  barraDeFerramentas?: ReactNode | undefined;
}

export const LayoutBasePage: React.FC<ILayoutBasePageProps> = ({ children, titulo, barraDeFerramentas }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100%' display="flex" flexDirection="column" gap={1}>
      <Box padding={1} display='flex' alignItems="center" gap={1} height={theme.spacing( smDown ? 6 : mdDown ? 8 : 12 )}>
        {
          smDown && (
            <IconButton onClick={toggleDrawerOpen}>
              <Icon>menu</Icon>
            </IconButton>
          )
        }
        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3' }
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="elipses"
        >
          {titulo}
        </Typography>
      </Box>

      {
        barraDeFerramentas && (
          <Box>
            {barraDeFerramentas}
          </Box>
        )
      }

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box>
  );
};