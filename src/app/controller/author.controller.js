const db = require('../model'); // Import the database object
const Author = db.Author; // Correctly reference the Author model




const AuthorController = {
    // Create a new author
    create: async (req, res) => {
        try {
            const { username, email, password_hash, profile_pic, bio } = req.body;
            const newAuthor = await Author.create({
                username,
                email,
                password_hash,
                profile_pic,
                bio,
            });
            res.status(201).json(newAuthor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get all authors
    findAll: async (req, res) => {
        try {
            console.log(req.query);
            
            console.log(Author);
            const authors = await Author.findAll();
            console.log(authors);

            res.status(200).json(authors);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Get an author by ID
    findById: async (req, res) => {
        try {
            const { id } = req.params;
            const author = await Author.findByPk(id);
            if (!author) {
                return res.status(404).json({ message: 'Author not found' });
            }
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Update an author by ID
    update: async (req, res) => {
        try {
            const { id } = req.params;
            const { username, email, profile_pic, bio } = req.body;
            const [updated] = await Author.update(
                { username, email, profile_pic, bio },
                { where: { id } }
            );
            if (!updated) {
                return res.status(404).json({ message: 'Author not found' });
            }
            const updatedAuthor = await Author.findByPk(id);
            res.status(200).json(updatedAuthor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Delete an author by ID
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const deleted = await Author.destroy({ where: { id } });
            if (!deleted) {
                return res.status(404).json({ message: 'Author not found' });
            }
            res.status(200).json({ message: 'Author deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = AuthorController;