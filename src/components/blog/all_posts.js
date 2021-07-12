import image1 from '../../images/graph.PNG'
import image2 from '../../images/vmd.PNG'
import image3 from '../../images/spin.PNG'

export const featuredPosts = [
    {
      title: 'Business Process Mining using Graph Convolutional Networks',
      date: 'Nov 12',
      description:
        "We extend the existing body of research in predictive business process monitoring, by testing" +
        " four different variants of Graph Neural Networks (GNN) and a fully connected Multi-layer Perceptron (MLP)" +
        " with dropout for the tasks of predicting the nature and timestamp of the next process activity. " +
        "This provides new insights into the performance of a prediction model, as they behave differently at different stages of a business-process."
        ,
      image: image1,
      imageText: 'Image Text',
      cardlink:'https://arxiv.org/abs/2102.07838',
      links:[
        {
          text: 'View publication',
          link: 'https://arxiv.org/abs/2102.07838',
        },
        {
          text: 'View source code',
          link: 'https://github.com/ishwarvenugopal/GCN-ProcessPrediction',
        },
      ]
    },
    {
      title: 'Scientific programming and mathematical modelling',
      date: 'Nov 11',
      description:
        'We present a programmed simulation for the formation of a self-propelling cluster via the process' +
        ' of capture and assembly of passive colloids on the surface of a chemically active colloid.' +
        ' We observe the formation of propelling dimers, trimers, tetramers, etc. depending on the chemical ' +
        'activity and size of the colloids.' +
        ' The simulations are coded using FORTRAN and visualised using Visual Molecular Dynamics software. ',
      image: image2,
      imageText: 'Image Text',
      cardlink: 'https://arxiv.org/abs/1910.00247',
      links: [
        {
          text:'View publication',
          link:'https://arxiv.org/abs/1910.00247'
        }
      ]
    },
    {
      title: 'SPIN: 2D Physics Game',
      date: 'Nov 11',
      description:
        'A 2D-Physics game programmed in Java using the JBox2D Physics Engine.' +
        ' It is a simple arcade puzzle game that consists of movable paddles which can' +
        ' be controlled using the keyboard, to guide a ball to the victory post ',
      image: image3,
      imageText: 'Image Text',
      cardlink: 'https://github.com/ishwarvenugopal/SPIN_2D_PhysicsGame',
      links: [
        {
          text:'View source code',
          link:'https://github.com/ishwarvenugopal/SPIN_2D_PhysicsGame'
        }
      ]
    },
  ];