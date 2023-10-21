const { addBlog, fetchAllBlogs, updateBlogById, deleteBlogById } = require('../services')

// Creating a blog
const createBlog = async(req, res, next) => {
    try {
        const { body } = req
        const [ newBlog ] = await addBlog(body)

        res.status(201).json({
            code: 201,
            status: 'success',
            message: 'Added new blog',
            data: newBlog
        })
    
    } catch (error) {
        return next(error)
    }
}

const getBlogs = async(req, res, next) => {
    try {
        const blogs = await fetchAllBlogs()

        res.status(200).json({
            code: 200,
            status: 'success',
            message: 'Fetched all blogs',
            data: blogs
        })

    } catch (error) {
        return next(error)
    }
}

const getBlog = async(req, res, next) => {
    try {
        const { blog, id } = req

        res.status(200).json({
            code: 200,
            status: 'success',
            message: `Found the blog with id ${id}`,
            data: blog
        })

    } catch (error) {
        return next(error)
    }
}

const updateBlog = async(req, res, next) => {
    try {
        const { body, id } = req
        const [ updatedBlog ] = await updateBlogById(body, id)
    
        res.status(200).json({
            code: 200,
            status: 'success',
            message: `Updated the blog with id ${id}`,
            data: updatedBlog
        })

    } catch (error) {
        return next(error)
    }
}

const deleteBlog = async(req, res, next) => {
    try {
        const { id } = req
        const deletedBlog = await deleteBlogById(id)

        res.status(200).json({
            code: 200,
            status: 'success',
            message: `Deleted the blog with id ${id}`,
            data: deletedBlog
        })

    } catch (error) {
        return next(error)
    }
}


module.exports = {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
}