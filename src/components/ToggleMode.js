import { Switch } from '@material-ui/core';
import React from 'react';
import { Button } from 'react-bootstrap';
import { ThemeConsumer } from 'styled-components'

export default function ToggleMode() {
  return (
    <>
      {theme => (
        <Button
          onClick={e =>
            theme.setTheme(
              theme.mode === 'dark'
                ? { ...theme, mode: 'dark' }
                : { ...theme, mode: 'dark' }
            )
          }
        >
          Toggle Mode
        </Button>
      )}
    </>
  );
}
