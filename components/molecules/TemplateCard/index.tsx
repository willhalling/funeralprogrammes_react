import { Box, Card, CardContent, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

import { makeStyles } from '../../../utils/useStyles'

const useStyles = makeStyles()((theme: any) => ({
  card: {
    background: theme.palette.primary[700],
    color: 'white',
    height: 470,
  },
  imageSection: {
    height: '300px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.palette.primary[400],
  },
  imageClassName: {
    height: 'auto !important',
    width: '100% !important',
    objectFit: 'contain',
  },
  cardHeadingWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px auto',
  },
  title: {
    fontSize: '1.125rem !important',
    lineHeight: '1.75rem !important',
    fontWeight: 600,
    color: theme.palette.primary[300],
    '&:hover': {
      color: theme.palette.primary[200],
    },
  },
  cardDescription: {
    color: theme.palette.primary[200],
    fontSize: '0.875rem',
    lineHeight: '20px',
    fontWeight: 500,
  },
}))
export const TemplateCard = ({ data }: any) => {
  const { classes } = useStyles()

  return (
    <Card sx={{ maxWidth: 422 }} className={classes.card}>
      <Box className={classes.imageSection}>
        <Image
          src={data?.image}
          alt=""
          height={300}
          width={422}
          className={classes.imageClassName}
        />
      </Box>
      <CardContent>
        <Box className={classes.cardHeadingWrapper}>
          <Link href="/template">
            <h1 className={classes.title}>{data?.title}</h1>
          </Link>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            className={classes.cardDescription}
          >
            {data?.subtitle}
          </Typography>
        </Box>
        <Typography variant="body2" className={classes.cardDescription}>
          {data?.description}
        </Typography>
      </CardContent>
    </Card>
  )
}
