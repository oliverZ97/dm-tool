import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4100/api',
})

export const insertMovie = payload => api.post(`/movie`, payload)
export const getAllMovies = () => api.get(`/movies`)
export const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
export const deleteMovieById = id => api.delete(`/movie/${id}`)
export const getMovieById = id => api.get(`/movie/${id}`)

export const insertBlogentry = payload => api.post(`/blogentry`, payload)
export const getAllBlogentries = () => api.get(`/blogentries`)
export const updateBlogentryById = (id, payload) => api.put(`/blogentry/${id}`, payload)
export const deleteBlogentryById = id => api.delete(`/blogentry/${id}`)
export const getBlogentryById = id => api.get(`/blogentry/${id}`)

const apis = {
    insertMovie,
    getAllMovies,
    updateMovieById,
    deleteMovieById,
    getMovieById,
    insertBlogentry,
    getAllBlogentries,
    updateBlogentryById,
    deleteBlogentryById,
    getBlogentryById
}

export default apis