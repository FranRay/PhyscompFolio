<script setup lang = "ts">
    import Navigation from '@/components/Navigation.vue';
</script>


<template>
    <Navigation></Navigation>
    <div class="site-container">
        <section class = "infographic-container">
            <h1>INCLUSIVE INNOVATION:</h1>
            <h2>Advancing Accessibility with Physical Computing</h2>
            <a class = "viewlink" href="https://drive.google.com/drive/folders/1GWfAIS1DIEUr1-Xh3VelzwDNktU3Uqp9?usp=share_link">> View Google Drive</a> 
            <p>“Inclusive Innovation” is an infographic that showcases how physical computing is propelling accessibility and inclusion. </p>
            <br>
            <p>With staggering statistics revealing the global prevalence of disabilities (WHO, 2022; WHO, 2023a; WHO, 2023b)  physical computing technologies such as Brain-Computer Interfaces (BCI) (Zaidi, Arshad and Gupta, 2023), Hearing Aids and Cochlear Implants (Sadikovna, 2022), and Myoelectric Prosthetic Limbs (Wang et al., 2022) are transforming the lives of individuals with disabilities.</p>
            <br>
            <p>The infographic also highlights other cutting-edge technologies including Exoskeletons, Smart Wheelchairs (Aziz et al., 2022), Braille Displays (Rempel, 2022), and Soft Exosuits (Kim et al., 2023) that are making a significant impact in fostering accessibility for people with diverse needs.</p>
            
            <div class = "media-container">
                
                <iframe src="https://www.youtube.com/embed/-6b7xXUcCjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <img class = "infographic-image" src="../images/Infographic.png">
            </div>
            
            <div class="references">
                <h2>REFERENCE LIST</h2>
                <p>Aziz, N., Khusaini, Nurul Syuhadah, Mohamed, Z., Hamid, A., Yusof, Y. and Aziz, M.R. (2022). Smart wheelchairs: A review on control methods. In: 2022 IEEE International Conference on Artificial Intelligence in Engineering and Technology (IICAIET). IEEE, pp.1–6.</p>
                <br>
                <p>Bates, T.J., Fergason, J.R. and Pierrie, S.N. (2020). Technological Advances in Prosthesis Design and Rehabilitation Following Upper Extremity Limb Loss. Current Reviews in Musculoskeletal Medicine, 13(4), pp.485–493.</p>
                <br>
                <p>Kim, J., Kantharaju, P., Yi, H., Jacobson, M., Jeong, H., Kim, H., Lee, J., Matthews, J., Zavanelli, N., Kim, H., Jeong, H., Kim, M. and Yeo, W.-H. (2023). Soft wearable flexible bioelectronics integrated with an ankle-foot exoskeleton for estimation of metabolic costs and physical effort. npj Flexible Electronics, 7(1), pp.1–10.</p>
                <br>
                <p>Rempel, J. (2022). The Importance of Braille During a Pandemic and Beyond. Assistive Technology Outcomes & Benefits, 16(2), pp.127–134.</p>
                <br>
                <p>Sadikovna, R.K. (2022). OBJECTIVES AND TASKS OF COCHLEAR IMPLANTATION. Web of Scientist: International Scientific Research Journal, 3(4), pp.1250–1255.</p>
                <br>
                <p>Special Olympics (2018). What is intellectual disability? [online] Special Olympics. Available at: https://www.specialolympics.org/about/intellectual-disabilities/what-is-intellectual-disability [Accessed 14 Apr. 2023].</p>
                <br>
                <p>Wang, T., Zhang, B., Liu, C., Liu, T., Han, Y., Wang, S., Ferreira, J.P., Dong, W. and Zhang, X. (2022). A Review on the Rehabilitation Exoskeletons for the Lower Limbs of the Elderly and the Disabled. Electronics, 11(3), p.388.</p>
                <br>
                <p>World Health Organization (2022). Blindness and Vision Impairment. [online] Who.int. Available at: https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment [Accessed 14 Apr. 2023].</p>
                <br>
                <p>World Health Organization (2023a). Deafness and Hearing Loss. [online] WHO. Available at: https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss [Accessed 14 Apr. 2023].</p>
                <br>
                <p>World Health Organization (2023b). Disability and health. [online] Who.int. Available at: https://www.who.int/news-room/fact-sheets/detail/disability-and-health [Accessed 14 Apr. 2023].</p>
                <br>
                <p>Zaidi, B.K., Arshad, A. and Gupta, A. (2023). Brain computer interface (BCI) technology: A neurological restoration. In: Proceedings of the 14th International Conference on Soft Computing and Pattern Recognition (SoCPaR 2022). pp.709–716.</p>
            </div>
        </section>
    </div>
</template>

<style scoped lang = "scss">
  //site container
.site-container {
    display: block;
    top: 6em;
    overflow-y: scroll;
    width: 90%;
    height: 85vh;
    margin-right: auto;
    margin-left: auto;
    border: 4px solid var(--clr-secondary); 
}
.infographic-container {
    display: flex;
    flex-direction: column;
    margin: 2em;

    @include media(tablet) {
        margin: 4em;
    }

    @include media (laptop) {
        margin: 5em;
    }

    h1 {
        margin-left: -0.15em;
    }
    h2 {
        margin-top: -0.5em;
        margin-bottom: 1em;
    }

    .media-container {
        display: flex;
        flex-direction: column;
        margin-block: 2em;
        align-items: center;

        iframe {
            aspect-ratio: 16/9;
            width: 80%;
            margin-top: 1em;
            margin-bottom: 2em;
        }
        .infographic-image {
            border: 2px solid var(--clr-secondary);
            width: 80%;
        }
    }

    .references {
        h2 {
            margin-top: 0.5em;
            margin-bottom: 0em;
            
        }
    }
}

.viewlink {
    display: flex;
    width: 100%;
    padding-left: 1em;
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
    margin-block: 1.5em;
  }

  .viewlink:hover {
    background-color: var(--clr-accent);
    color: var(--clr-secondary);
  }

.site-container::-webkit-scrollbar {
    width: 1.2em;
}
 
.site-container::-webkit-scrollbar-thumb {
    background: var(--clr-secondary);
    border-left: 4px solid var(--clr-secondary);
}

.site-container::-webkit-scrollbar-track {
    background: var(--clr-primary);
    border-left: 4px solid var(--clr-secondary);
}

</style>