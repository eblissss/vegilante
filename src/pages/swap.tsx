import {
   Backdrop,
   Box,
   CardMedia,
   Container,
   // Fade,
   Modal,
   Typography,
} from '@mui/material';
import { ArgumentsCard } from '../components/basiccard';
import React, { useState } from 'react';

interface sub {
   name: string;
   desc: string;
}

interface ingredient {
   text: string;
   subs: sub[];
}

const pairs = {
   Milk: [
      { name: 'Almond milk', desc: 'Non sweetened!' },
      { name: 'Soy Milk', desc: 'Non sweetened!' },
      { name: 'Oat Milk', desc: 'Non sweetened!' },
      { name: 'Coconut Milk', desc: 'Use for richness. Non sweetened!' },
      { name: 'Rice Milk', desc: 'Use instead of skim milk. Non sweetened!' },
   ],
   'Heavy Cream': [
      {
         name: 'Coconut Milk',
         desc: 'Coconut milk has a similar fat content to cream with just a little bit of sweetness.',
      },
      {
         name: 'Coconut Cream',
         desc: 'In recipes like ice cream, try coconut cream for a more solid texture.',
      },
      {
         name: 'Cashews',
         desc: 'Cashews blended with water or a plant milk make a neutral cream',
      },
   ],
   'Eggs (baking)': [
      {
         name: 'Egg replacer powder',
         desc: "Made by brands like Bob's Red Mill, egg replacer is cheaper per unit than eggs for baking. It also doesn't add a grainy texture.",
      },
      {
         name: 'Flax seeds',
         desc: 'Use 1 tbsp ground or whole flax seeds with 2-3 tbsp of warm water to make a hearty replacement for an egg.',
      },
      {
         name: 'Chia seed egg',
         desc: "Chia adopt a gel-like texture that works as a binder. Best in recipes where you don't mind a bit of texture.",
      },
   ],
   'Eggs (eating)': [
      {
         name: 'Tofu scramble',
         desc: 'Same protein and eggy texture, without the abuse!',
      },
      {
         name: 'JustEgg',
         desc: 'One of the most realistic ways to make scrambled eggs and omelettes, JustEgg holds together well and can be used in many recipes.',
      },
   ],
   Buttermilk: [
      {
         name: 'Non-dairy milk and vinegar',
         desc: 'For 1 cup of buttermilk, substitute 3/4 cup and 2 tablespoons of non-dairy milk + 2 tablespoons of a neutral flavored vinegar (like white vinegar).',
      },
   ],
   Yogurt: [
      {
         name: 'Non-dairy yogurt',
         desc: 'There are many non-dairy yogurt varieties available, including coconut, soy, and almond. You can also make your own using a plant milk and probiotic capsules!',
      },
   ],
   'Sour Cream': [
      { name: 'Cashew cream and lemon juice', desc: 'also interesting' },
   ],
   Butter: [
      { name: 'Margarine', desc: 'Also called vegan butter.' },
      {
         name: 'Vegetable oil, olive oil',
         desc: 'Use instead of melted butter in baking, or with salt to replace butter in cooking.',
      },
      { name: 'Coconut oil', desc: 'Use instead of butter.' },
      { name: 'Vegetable shortening', desc: 'Use instead of softened butter.' },
   ],
};

console.log(pairs);

const tempIng: ingredient = { text: 'Milk', subs: pairs.Milk };

function swap(): any {
   const [open, setOpen] = useState(false);
   const [ingredient, setIngredient] = useState(tempIng);

   return (
      <Box
         component="div"
         sx={{
            backgroundColor: 'primary.main',
         }}
      >
         {open ? (
            <ModalFilled
               closeFunc={() => setOpen(false)}
               ingredient={ingredient}
            />
         ) : (
            <></>
         )}
         <Container
            id="BACKGROUND"
            sx={{
               p: '30px',
               minHeight: 'calc(100vh - 59px)',
            }}
         >
            <Container
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <Typography variant="h3" component="h3" className="BigTitle">
                  {'Vegan Substitutes'}
               </Typography>
               <Container
                  sx={{
                     display: 'grid',
                     gridTemplateColumns: 'repeat(3, 1fr)',
                     gridColumnGap: '10px',
                     gridRowGap: '10px',
                     marginTop: '5%',
                  }}
               >
                  <ArgumentsCard
                     title={'Milk'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({ text: 'Milk', subs: pairs.Milk });
                     }}
                  />
                  <ArgumentsCard
                     title={'Eggs (baking)'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({
                           text: 'Eggs',
                           subs: pairs['Eggs (baking)'],
                        });
                     }}
                  />
                  <ArgumentsCard
                     title={'Eggs (eating)'}
                     desc={''}
                     to={'swap'}
                     image={
                        'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=345&q=50'
                     }
                     onClick={() => {
                        setOpen(true);
                        setIngredient({
                           text: 'Eggs',
                           subs: pairs['Eggs (eating)'],
                        });
                     }}
                  />
                  <ArgumentsCard
                     title={'Butter'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({ text: 'Butter', subs: pairs.Butter });
                     }}
                  />
                  <ArgumentsCard
                     title={'Honey'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({ text: 'Honey', subs: [] });
                     }}
                  />
                  <ArgumentsCard
                     title={'Buttermilk'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({
                           text: 'Buttermilk',
                           subs: pairs.Buttermilk,
                        });
                     }}
                  />
                  <ArgumentsCard
                     title={'Heavy Cream'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({
                           text: 'Heavy Cream',
                           subs: pairs['Heavy Cream'],
                        });
                     }}
                  />
                  <ArgumentsCard
                     title={'Yogurt'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({ text: 'Yogurt', subs: [] });
                     }}
                  />
                  <ArgumentsCard
                     title={'Meat'}
                     desc={''}
                     to={'swap'}
                     onClick={() => {
                        setOpen(true);
                        setIngredient({ text: 'Meat', subs: [] });
                     }}
                  />
               </Container>
            </Container>
         </Container>
      </Box>
   );
}

const ModalFilled = ({
   closeFunc,
   ingredient,
}: {
   closeFunc: Function;
   ingredient: ingredient;
}): any => {
   const handleClose = (): void => closeFunc();

   return (
      <div>
         <Modal
            aria-labelledby="recipeModal"
            aria-describedby="recipeModalDesc"
            open={true}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
         >
            {/* <Fade in={true}> */}
            <ModalStuff title={ingredient.text} subs={ingredient.subs} />
            {/* </Fade> */}
         </Modal>
      </div>
   );
};

const ModalStuff = ({ title, subs }: { title: string; subs: sub[] }): any => {
   return (
      <Box
         component="div"
         sx={{
            backgroundImage:
               'linear-gradient(25deg, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '180px',
            width: '60%',
            height: '80%',
            maxHeight: '100%',

            borderRadius: '18px',
            boxShadow: 12,
            overflowX: 'hidden',
            overflowY: 'auto',
            scrollbarWidth: 'none',
         }}
      >
         <Box
            component="div"
            sx={{
               backgroundColor: '#202020',
               top: 0,
               width: '100%',
               height: '40%',
               maxHeight: '70%',
               minHeight: '160px',
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'flex-end',
               justifyContent: 'flex-end',
               overflow: 'hidden',
               position: 'relative',
            }}
         >
            <CardMedia
               component="img"
               sx={{
                  position: 'absolute',
                  justifySelf: 'center',
                  height: '450px',
                  opacity: '50%',
                  objectFit: 'cover',
                  width: '100%',
                  zIndex: 'modal',
                  overflow: 'hidden',
               }}
               image={'https://picsum.photos/450/600'}
               alt="food image"
            />
            <Typography
               sx={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'primary.contrastText',
                  backgroundColor: 'primary.dark',
                  fontSize: '3rem',
               }}
            >
               {title}
            </Typography>
         </Box>
         <Container
            disableGutters
            sx={{ display: 'flex', flexDirection: 'column' }}
         >
            {subs.map((sub, i) => (
               <Box
                  key={`subb${i}`}
                  sx={{
                     display: 'flex',
                     backgroundColor: 'primary.dark',
                     margin: '5px',
                     p: '5px',
                     borderRadius: '5px',
                     alignItems: 'center',
                     color: 'primary.contrastText',
                  }}
               >
                  <Typography
                     sx={{ fontSize: '1.2rem', margin: '10px', flex: 1 }}
                  >
                     {sub.name}
                  </Typography>
                  <Typography sx={{ margin: '10px', flex: 3 }}>
                     {sub.desc}
                  </Typography>
               </Box>
            ))}
         </Container>
      </Box>
   );
};

export default swap;
