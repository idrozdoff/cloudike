export const style = {
  container: {
    width: '100%',
  },
  photo: {
    height: 100,
    width:100,
    objectFit: 'cover',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  date: {
    padding: 10,
    backgroundColor: '#dadada',
    width: '100%',
    fontWeight: 'bold',
  },
  emptyAlbum: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  link: {
    fontSize: 14,
    letterSpacing: 0.25,
    lineHeight: '20px',
    color: 'rgba(0,0,0,0.60)',
    marginBottom: 10,
    marginLeft: 5,
  },
  card: {
    margin: 10,
    borderRadius: 8,
    width: 322,
    height: 322,
  },
  cardContent: {
    marginTop: 80,
  },
  media: {
    height: '100%',
    width: '100%',
  },
  cardActionArea: {
    height: '100%',
  },
}