import React from 'react';
import useFirestore from '../../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg}) => {
    const { docs } = useFirestore('images');
    console.log(docs);

    return (
        <div className='img-grid'>
            {docs && docs.map(doc => (
                <motion.div className="img-wrap" key={doc.id} 
                layout
                whileHover={{opacity: 1}}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img src={doc.url} alt="one of many uploaded images inside an array" 
                        initial={{ opacity: .2}}
                        animate={{ opacity:1 }}
                        transition={{ delay: .3}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;