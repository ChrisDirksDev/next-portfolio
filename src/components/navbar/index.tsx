import { Button } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Link from 'next/link';
import React from 'react'
import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <>
      <Grid container rowSpacing={2}
        columnSpacing={5} className={styles.container}>
        <Grid xs className={styles.outline}>
          <Button> CD </Button>
        </Grid>
        <Grid container xs={8} className={styles.navlinks}>
          <Grid xs> <Link href='/'>Home</Link> </Grid>
          <Grid xs> <Link href='/'>About</Link> </Grid>
          <Grid xs> <Link href='/'>Projects</Link> </Grid>
          <Grid xs> <Link href='/'>Contact Me</Link> </Grid>
          <Grid xs> <Link href='/'>Resume</Link> </Grid>
        </Grid>
        <Grid xs className={styles.outline}>
        </Grid>
      </Grid>
    </>
  )
}

