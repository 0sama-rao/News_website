const uuid = require ('uuid/v4');
const {validationResult} = require('express-validator');
const HttpError = require('../models/http-error');
const Articles = require('../models/articles');

//using dummy database untill connection is made
let DUMMY_ARTICLES = [
{  id: 'p1',
  title: 'SCIENCE AND TECH  ',
  description: 'hellsadai ',
  link : 'aoihoahocai',
  creator: 't1'
}
];

////for ARTICLES (getting articles from database )
//GET ARTICLES
const getArticleById =(req, res, next )=> {
  const articleId = req.params.pid; // {pid: 'p1'}
  const place = DUMMY_ARTICLES.find(p=>{
    return p.id == articleId;
  });
  if (!article){
    throw new HttpError ('Could not find the article for the provided ID ', 404 );
  }
  res.json({article});
};


//for creating new article (FOR ADMIN ONLY)

const createArticle = async (req, res,next)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()) {

    console.log(errors);
    throw new HttpError('Empty Article cant be add ', 422);
  }
  const {title, description, link, creator } = req.body;

  const createdArticle = new Article({
    title,
    description,
    link,
    creator
  });

  try{
  await createdArticle.save();
}
catch (err){
  const error = new HttpError
    ('Creating article failed, please try again', 500);
  return next(error);
}
  DUMMY_ARTICLES.push(createdArticle);
  res.status(201).json({place: createdArticle});
};



//PATCH (FOR UPDATING OR EDITING A ARTICLE)

const updateArticle =(req, res,next) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {

    console.log(errors);
    throw new HttpError('Invalid input passed please check your data ', 422);
  }

    const {title,description} = req.body;
    const articelId = req.params.pid; //use pid

    const updateArticle = {...DUMMY_ARTICLES.find (p=>p.id === placeId)};
    const placeIndex = DUMMY_ARTICLES.findIndex(p=> p.Id === placeId);
    updatePlace.title = title;
    updatePlace.description = description;

//NOW WE UPDATING THE PLACES
    DUMMY_ARTICLES[articleIndex] = updateArticle;
    // and showing ht e response code 200
    res.status(200).json({message: updateArticle});
};

//DELETE FUNCTION

const deleteArticle =(req, res,next) => {
  const articleId = req.params.pid;
  DUMMY_ARTICLES = DUMMY_ARTICLES.filter(p => p.Id !== articleId );
  res.status(200).json({message:'ARTICLE DELETED' });
};


exports.getArticleById = getArticleById;
exports.createArticle = createArticle;
exports.updateArticle = updateArticle;
exports.deleteArticle = deleteArticle;
