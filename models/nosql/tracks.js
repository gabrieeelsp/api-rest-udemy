const mongoose = require('mongoose');

const TraksSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        albun: {
            type: String
        },
        cover: {
            type: String,
            validate: (req) => {
                return true;
            },
            message: "ERROR_URL",
        },
        artist: {
            name: {
                type: String,
            },
            nickname: {
                type: String,
            },
            nationality: {
                type: String,
            }
        },
        duration: {
            start: {
                type: Number,
            },
            end: {
                type: Number
            }
        },
        mediaId : {
            type: mongoose.Types.ObjectId,
        }
    },
    {
        timestamps: true,  //TODO createAt, updateAt
        versionKey: false,
    }
);

module.exports = mongoose.model('tracks', TraksSchema);