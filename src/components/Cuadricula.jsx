import Pelicula from "./Pelicula";

const Cuadricula = () => {

  return (
    <>
      <Pelicula
        // datos = {{ imagen: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7MP5txYWxrCwP5rNJYfDnnnIdJzkQU0I8nMXzc54FuqtCWIaeTReZfrC6F3cF7huLkYopZGxlNweOh29FF2tueAMONmGCNL9a9GVqfdU", alt: "El Rey Leon", titulo: "El Rey Leon" }} 
        //  PUEDO ENVIAR UN ARRAY DE DATOS O PUEDO ENVIARLO POR SEPARADO -> DE LA MISMA FORMA DEBO CAMBIARLO EN EL COMPONENTE HIJO
        imagen="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7MP5txYWxrCwP5rNJYfDnnnIdJzkQU0I8nMXzc54FuqtCWIaeTReZfrC6F3cF7huLkYopZGxlNweOh29FF2tueAMONmGCNL9a9GVqfdU"
        alt="El Rey Leon"
        titulo="El Rey Leon"
        visto={true}
      />
      <Pelicula
        imagen="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTWV5hsF3Yl6Tg26h-B0QvKNkQ36ugoxiZQ6_ItYbe4cs_fhM0jEwpHKAjbs8SB0Qj4UGebtcfCCnd9cqG3b82ccW0HdcLeM4m_62cixA"
        alt="Aladín"
        titulo="Aladín"
        visto={true}
      />
      <Pelicula
        imagen="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtJzpoFudn6v-f_wAo6lRqLEr5IK-zgRD4zcKB_tgSYsGk1FsyHWJo4EN25QTgvE-H4rKXyjr2ZzXLn0jcnWBYq-xPFM0gtMV8w9uu9KQ"
        alt="Mulán"
        titulo="Mulán"
        visto={false}
      />
      <Pelicula
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BVcnpaVWfgVPikORwXb-HpfgOBbIsukKmPJ1miGgp6EgLpE4JYBjDqya2BFKRSDPRf_8S7a1piL349GaqlicDpd_i2mlRCu-_w_N9x4"
        alt="Frozen"
        titulo="Frozen"
        visto={true}
      />
      <Pelicula
        imagen="https://lumiere-a.akamaihd.net/v1/images/b7902dabddffa9551cf191d151869dd899-14-beauty-and-the-be_79038e63.jpeg?region=41,0,1118,629&width=960"
        alt="La bella y la bestia"
        titulo="La bella y la bestia"
        visto={false}
      />
      <Pelicula
        imagen="https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0,0,540,810"
        alt="Coco"
        titulo="Coco"
        visto={true}
      />
      <Pelicula
        imagen="https://es.web.img3.acsta.net/pictures/14/02/13/11/08/054573.jpg"
        alt="Bucándo a Nemo"
        titulo="Buscándo a Nemo"
        visto={false}
      />
    </>
  );
};

export default Cuadricula;
