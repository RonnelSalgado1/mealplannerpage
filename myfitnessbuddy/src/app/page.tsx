"use client";
import { Stack } from "@chakra-ui/react"

import { Center } from "@chakra-ui/react";

import { Button, Card, Image, Text } from "@chakra-ui/react"

import { Heading } from "@chakra-ui/react"

import { List } from "@chakra-ui/react"

import { Tabs } from "@chakra-ui/react"
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import { GiHotMeal } from "react-icons/gi";


import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"

import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  DialogActionTrigger
} from "@/components/ui/dialog"

import { Icon } from "@chakra-ui/react"
import { VscAdd  } from "react-icons/vsc"
import { GiBiceps } from "react-icons/gi";
import { IoBody } from "react-icons/io5";


function Home() {
  const handleClick = () => {
    console.log("hello");
  };

  return (
    <div>
      <Center>
      <Stack gap = "4">
      <Tabs.Root defaultValue="Bulking" size="lg">
      <Tabs.List>
        <Tabs.Trigger value="Bulking">
        <GiBiceps />
          Bulking
        </Tabs.Trigger>
        <Tabs.Trigger value="Cutting">
        <IoBody />
        Cutting
        </Tabs.Trigger>
        <Tabs.Trigger value="General">
        <GiHotMeal />
          General
        </Tabs.Trigger>
      </Tabs.List>

      {/*First Card */}
      <Tabs.Content value="Bulking">
      <Card.Root maxW="sm" overflow="hidden" gap="4">
      <Image      
       height="300px"
        src="https://www.togethertoeat.com/wp-content/uploads/2023/08/Oat-Smoothie-Bowl-strawberry-and-raspberry-smoothie-bowl-2.jpg?ezimgfmt=ngcb5/notWebP"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Oats and Protein Smoothie Bowl</Card.Title>
        <Card.Description>
A creamy blend of rolled oats, protein powder, Greek yogurt, and fresh fruits like bananas, strawberries, and blueberries, topped with granola and a drizzle of honey for a nutritious and energizing breakfast or post-workout meal
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          550 k/cal  30g protein
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
      <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Oats and Protein Smoothie Bowl</DialogTitle>
        </DialogHeader>
        <DialogBody>
        <Image      
       height="300px"
       width="500px"
        src="https://www.togethertoeat.com/wp-content/uploads/2023/08/Oat-Smoothie-Bowl-strawberry-and-raspberry-smoothie-bowl-2.jpg?ezimgfmt=ngcb5/notWebP"
        alt="Green double couch with wooden legs"
        paddingBottom="30px"
      />
          <p>
          The Oat and Protein Smoothie Bowl is a creamy, nutrient-packed breakfast that combines rolled oats, protein powder, Greek yogurt, and a medley of fresh fruits like bananas, strawberries, and blueberries. Topped with additional fruit, granola, and a drizzle of honey, this bowl offers a perfect balance of protein, healthy fats, and complex carbohydrates. It’s not only delicious and visually appealing but also a great way to kickstart your day or replenish after a workout. Enjoy it with a spoon for a satisfying and energizing meal!
          </p>
          <Heading paddingTop="20px">Ingrediants</Heading>
          <List.Root>
          <List.Item>
          1/2 cup rolled oats
          </List.Item>
          <List.Item>
          1 scoop vanilla protein powder (or any flavor you prefer)
          </List.Item>
          <List.Item>
          1/2 cup Greek yogurt (plain or vanilla, for added protein and creaminess)
          </List.Item>
          <List.Item>
          1/2 cup almond milk (or milk of choice; add more for a thinner consistency)
          </List.Item>
          <List.Item>
          1/2 banana (sliced; save the other half for topping)
          </List.Item>
          <List.Item>
          1/2 cup strawberries (fresh or frozen)
          </List.Item>
          <List.Item>
          1/4 cup blueberries (fresh or frozen)
          </List.Item>
          <List.Item>
          1 tablespoon almond butter (or any nut butter you like, for healthy fats)
          </List.Item>
          
        </List.Root>
       
        <Heading paddingTop="20px">Instructions</Heading>
        <List.Root as="ol">
          <List.Item>
          Blend the Smoothie Base: In a blender, add oats, protein powder, Greek yogurt, almond milk, half a banana, 1/2 cup strawberries, and 1/4 cup blueberries. Blend until smooth and creamy.
</List.Item>
          <List.Item>
          Adjust Consistency: Check the texture and adjust by adding more milk if needed to get the desired thickness. It should be thick enough to eat with a spoon.
</List.Item>
          <List.Item>
          Serve and Top: Pour the smoothie base into a bowl. Top with sliced banana, strawberries, blueberries, granola, chia seeds, and a drizzle of honey or agave syrup, if desired.
          </List.Item>
          <List.Item>
          Enjoy! This smoothie bowl is best enjoyed fresh.
          </List.Item>
        </List.Root>

        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>

    <Icon fontSize="2xl" color="pink.700">
    <VscAdd />
  </Icon>
      </Card.Footer>
    </Card.Root>
    
          {/*second Card */}
    <Card.Root maxW="sm" overflow="hidden">
      <Image      
       height="300px"

        src="https://www.tamingtwins.com/wp-content/uploads/2023/05/image-46.jpeg"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Bulking Burrito</Card.Title>
        <Card.Description>
        Bulking beef burrito is a protein-rich, hearty meal packed with seasoned beef, rice, beans, and cheese for maximum energy and muscle fuel.
        </Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          810 k/cal  55g protein
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
      <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Bulking Burito</DialogTitle>
        </DialogHeader>
        <DialogBody>
        <Image      
        height="300px"
        width="500px"
        src="https://www.tamingtwins.com/wp-content/uploads/2023/05/image-46.jpeg"
        alt="Green double couch with wooden legs"
        paddingBottom="30px"
      />
          <p>
          A bulking beef burrito is a hearty, protein-packed meal, perfect for building muscle and fueling workouts. Filled with seasoned ground beef, black beans, rice, shredded cheese, and a touch of guacamole or sour cream, it's wrapped in a warm flour tortilla for a satisfying, nutrient-dense bite. Ideal for high-calorie diets, this burrito provides a balanced mix of proteins, carbs, and healthy fats to support muscle growth and recovery.
          </p>
          <Heading paddingTop="20px">Recipe</Heading>
          <List.Root>
          <List.Item>
          6 oz (170g) lean ground beef (93% lean) — 280 calories, 33g protein         
           </List.Item>
          <List.Item>
          ½ cup cooked black beans — 100 calories, 7g protein
          </List.Item>
          <List.Item>
          ¼ cup shredded cheddar cheese — 110 calories, 7g protein
          </List.Item>
          <List.Item>
          2 tbsp Greek yogurt (instead of sour cream) — 20 calories, 3g protein
          </List.Item>
          <List.Item>
          1 large whole wheat tortilla (around 10 inches) — 130 calories, 4g protein
          </List.Item>
          <List.Item>
          ¼ avocado, sliced — 60 calories, 1g protein
          </List.Item>
          <List.Item>
          Taco seasoning (to taste)
          </List.Item>
          
        </List.Root>
       
        <Heading paddingTop="20px">Instructions</Heading>
        <List.Root as="ol">
          <List.Item>
          Cook the ground beef in a skillet over medium heat, adding taco seasoning to taste.
          </List.Item>
          <List.Item>
          Warm the tortilla in a skillet or microwave.
          </List.Item>
          <List.Item>
          Layer the burrito by adding cooked beef, black beans, rice, shredded cheese, Greek yogurt, and avocado slices.
          </List.Item>
          <List.Item>
          Roll up the burrito, folding in the sides, and enjoy!
          </List.Item>
          <Heading paddingTop="20px">Summary</Heading>

        </List.Root>
        <List.Root>
          <List.Item>
          Calories: ~810
          </List.Item>
          <List.Item>
          Protein: ~55g
          </List.Item>
          <List.Item>
          Carbohydrates: ~69g
          </List.Item>
          <List.Item>
          Fat: ~39g
          </List.Item>
        </List.Root>
        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>

    <Icon fontSize="2xl" color="pink.700">
    <VscAdd />
  </Icon>
      </Card.Footer>
    </Card.Root>
    
          {/*third Card */}

    <Card.Root maxW="sm" overflow="hidden">
      <Image      
       height="300px"

        src="https://www.nextinlime.com/wp-content/uploads/2023/11/ground-beef-pesto-pasta.jpeg"
        alt="Green double couch with wooden legs"
      />
      <Card.Body gap="2">
        <Card.Title>Pasta with Ground Beef and Spinach Pesto
        </Card.Title>
        <Card.Description>
        Pasta with Ground Beef and Spinach Pesto is a hearty dish that combines al dente whole wheat pasta with savory ground beef and a vibrant spinach pesto, creating a deliciously satisfying and nutritious meal.
</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          650 k/cal  35 protein
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
      <DialogRoot>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          View
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Pasta with Ground Beef and Spinach Pesto</DialogTitle>
        </DialogHeader>
        <DialogBody>
        <Image      
        height="300px"
        width="500px"
        src="https://www.nextinlime.com/wp-content/uploads/2023/11/ground-beef-pesto-pasta.jpeg"
        alt="Green double couch with wooden legs"
        paddingBottom="30px"
      />
          <p>

Pasta with Ground Beef and Spinach Pesto is a deliciously hearty meal that marries the rich flavors of savory ground beef with the freshness of a vibrant spinach pesto. The dish starts with al dente whole wheat pasta, providing a nutritious base, while the homemade pesto blends fresh spinach, basil, garlic, and Parmesan for a creamy, aromatic sauce. This comforting combination is not only satisfying but also packed with protein and essential nutrients, making it an ideal option for a post-workout meal or a cozy dinner. With the added texture from the ground beef and the option to garnish with cherry tomatoes and extra cheese, this dish offers a delightful balance of flavors and textures that is sure to please any palate.
          </p>
          <Heading paddingTop="20px">Recipe</Heading>
          <List.Root>
          <List.Item>
          12 oz (340 g) whole wheat pasta (or pasta of your choice)
          </List.Item>
          <List.Item>
          1 lb (450 g) ground beef (lean or extra lean)
          </List.Item>
          <List.Item>
          2 cups fresh spinach (packed)
          </List.Item>
          <List.Item>
          1/2 cup fresh basil leaves
          </List.Item>
          <List.Item>
          1/4 cup grated Parmesan cheese
          </List.Item>
          <List.Item>
          1/4 cup walnuts or pine nuts (optional)
          </List.Item>
          <List.Item>
          2 cloves garlic (minced)
          </List.Item>
          <List.Item>
          1/4 cup olive oil
          </List.Item>
          <List.Item>
          Salt and pepper (to taste)
          </List.Item>
          <List.Item>
          1/2 teaspoon red pepper flakes (optional, for a kick)
          </List.Item>
          <List.Item>
          Cherry tomatoes (for garnish, optional)
          </List.Item>
          
        </List.Root>
       
        <Heading paddingTop="20px">Instructions</Heading>
        <List.Root as="ol">
          <List.Item>
          Cook the Pasta:

In a large pot, bring salted water to a boil. Add the pasta and cook according to package instructions until al dente. Reserve about 1 cup of pasta water, then drain the pasta and set aside.          </List.Item>
          <List.Item>
          Make the Spinach Pesto:
In a food processor, combine fresh spinach, basil, Parmesan cheese, walnuts (or pine nuts), minced garlic, salt, and pepper. Pulse until finely chopped.
While the processor is running, gradually drizzle in the olive oil until the mixture is smooth and creamy. Adjust seasoning as needed.          </List.Item>
          <List.Item>
          Cook the Ground Beef:

In a large skillet over medium heat, add the ground beef. Cook until browned and fully cooked, about 6–8 minutes. Break it up into small pieces with a spatula. Season with salt, pepper, and red pepper flakes (if using).          </List.Item>
          <List.Item>
          Combine Ingredients:

Once the beef is cooked, add the cooked pasta to the skillet along with the spinach pesto. Toss everything together, adding reserved pasta water a little at a time to achieve your desired sauce consistency.          </List.Item>
          <List.Item>
          Serve:

Divide the pasta into bowls, garnish with additional Parmesan cheese and cherry tomatoes if desired, and enjoy!
          </List.Item>
        </List.Root>

        <Heading paddingTop="20px">Summary</Heading>

        <List.Root>
          <List.Item>
          Calories: 600–700 (depending on the specific ingredients used)
          </List.Item>
          <List.Item>
          Protein: 30–35g
          </List.Item>
          <List.Item>
          Carbs: 60–70g
          </List.Item>
          <List.Item>
          Fats: 25–30g
          </List.Item>
        </List.Root>

        </DialogBody>
        <DialogFooter>
          <DialogActionTrigger asChild>
            <Button variant="outline">Cancel</Button>
          </DialogActionTrigger>
          <Button>Save</Button>
        </DialogFooter>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>

    <Icon fontSize="2xl" color="pink.700">
    <VscAdd />
  </Icon>
      </Card.Footer>
    </Card.Root>
      </Tabs.Content>
      <Tabs.Content value="projects">Manage your projects</Tabs.Content>
      <Tabs.Content value="tasks">
        Manage your tasks for freelancers
      </Tabs.Content>
    </Tabs.Root>
    
    

    
    </Stack>
    
    
    </Center>

    <Stack>
      <Center>
    <PaginationRoot 
    size={"lg"}
     count={10}
     pageSize={1}
     defaultPage={1}
     >
  <PaginationPrevTrigger />
  <PaginationItems />
  <PaginationPageText />
  <PaginationNextTrigger />
</PaginationRoot>
</Center>
</Stack>
    </div>
  );
}



export default Home;

