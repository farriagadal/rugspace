
import React, { useEffect, useState } from 'react'
import Loading from 'src/components/Loading'
import Button from 'src/styled-components/Button'
import Pagination from '@mui/material/Pagination'
import { Container, Box, Input, ImageContainer, List, Pages } from './styles'
import axios from 'axios'

const ImageSearch = () => {
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(10)
  const [isFirst, setIsFirst] = useState(true)
  const [query, setQuery] = useState('')
  const [images, setImages] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const searchImages = async () => {
    setIsLoading(true)
    const accessToken = 'rfiSeLlKVVAoX5tm4-uKf5cRwqc0jPxVmJUQ1VfsbGU'
    const response = await axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=${accessToken}`, {
      params: {
        page: page,
        per_page: 9
      }
    })
    setImages(response.data?.results)
    setTotalPages(response.data?.total_pages)
    setIsLoading(false)
    setIsFirst(false)
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 10000)
  }

  useEffect(() => {
    query && searchImages()
  }, [page])
  

  return (
    <Container>
      <Box>
        <Input
          type="text"
          placeholder="¿Que imagen buscas?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button onClick={searchImages}>Buscar</Button>
      </Box>
      <ImageContainer>

        { !isLoading && images.length > 0 &&
            <>
              <List>
                { images.map((image: any) => (
                  <img key={image.id} src={image.urls.small} alt={image.description} />
                ))}
              </List>
              <Pages>
                <Pagination page={page} count={totalPages} onChange={(event, value) => setPage(value)} />
              </Pages>
            </>
        }

        { isLoading && <Loading /> }
        { images.length === 0 && !isLoading && isFirst && <p>Ingresa una palabra para buscar</p>}
        { images.length === 0 && !isLoading && !isFirst && <p>No se encontraron resultados</p>}
      </ImageContainer>
    </Container>
  )
}

export default ImageSearch


