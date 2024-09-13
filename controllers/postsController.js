import db from '../config/db.js'; // Import the MySQL connection
import { nanoid } from 'nanoid';

// Get data from the "posts" table
export const getpostss = (req, res) => {
    db('posts').select('*')
      .then(results => res.json(results))
      .catch(err => res.status(500).send({ message: 'Error fetching postss', error: err }));
  };
  
// Create or update posts data
export const saveposts  = (req, res) => {
    const { uuid, owner_user_uuid, company_id, type, title, 
        description, poster, poster_title, category_id, 
        category_model, published, created_at, updated_at, published_at } = req.body;

    if (uuid) {
        db('posts')
        .where({ uuid })
        .update({ title, published, created_at, updated_at, published_at })
        .then(result => res.json({ message: 'posts updated successfully', result }))
        .catch(err => res.status(500).send({ message: 'Error updating posts', error: err }));
    } else {
        const newposts = {
          uuid: nanoid(),
          owner_user_uuid: owner_user_uuid,
          //company_id: nanoid(),
          type: type,
          title: title,
          description: description,
          published: published,
          created_at: new Date(),
          updated_at: new Date(),
          published_at: new Date()
        };
        
        db('posts').insert(newposts)
        .then(result => res.json({ message: 'posts created successfully', result }))
        .catch(err => res.status(500).send({ message: 'Error creating posts', error: err }));
    }
};
