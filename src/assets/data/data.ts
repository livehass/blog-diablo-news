import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export type ArticleProps = {
  id: string;
  cover: string;
  datePost: string;
  title: string;
  subtitle: string;
  content: any[];
};

export const data: ArticleProps[] = [
  {
    id: 'h1',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/hd/HD6GQU67OYNL1741132170446.png',
    datePost: format(new Date(2024, 3, 7), 'dd MMMM, yyyy', { locale: ptBR }),
    title: 'RTP do 2.2.0: O que você precisa saber?',
    subtitle:
      'Prenúncio de seu retorno, as artimanhas pútridas de Belial já se alastram livremente por Santuário',
    content: [
      {
        id: 'paragraph',
        text: '"Prenúncio de seu retorno, as artimanhas pútridas de Belial já se alastram livremente por Santuário, maculando a mente e o corpo de uma população assustada. Conforme Belial torna mais indistinta a linha entre realidade e ficção, a influência dele cresce. Será que ludibriar Santuário saciará a sede de poder aparentemente infinita do Senhor da Mentira? O Reino de Teste Público (RTP) da versão 2.2.0 de Diablo IV estará disponível de 11 a 18 de março, e você terá a chance de testar mudanças e recursos que serão lançados futuramente no jogo-base na próxima temporada, além de atualizações de Vessel of Hatred. O intuito do RTP é testar atualizações e recursos antes do lançamento da próxima temporada, Retorno de Belial, na qual nosso foco serão os chefes. Então, com seu feedback, faremos alguns ajustes antes do lançamento da próxima temporada. O feedback que recebemos nos ajuda a ajustar as mudanças de balanceamento, corrigir bugs e criar a melhor experiência possível enquanto testamos sistemas novos. Muito obrigado por jogar no RTP. Eis o que haverá de prévia da próxima temporada no RTP do 2.2.0."',
      },
    ],
  },
  {
    id: 'h2',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/zr/ZR0WOJNUIKG21740529670998.png',
    datePost: format(new Date(2024, 4, 15), 'dd MMMM, yyyy', { locale: ptBR }),
    title: 'Fartura de goblins dourados',
    subtitle:
      'O subterrâneo de Santuário está repleto de criaturas das mais gananciosas. Essa Marcha dos',
    content: [
      {
        id: 'paragraph',
        text: '"Goblins introduz seis variantes de goblins novinhas que permanecerão após o fim do aumento na atividade de goblins. Mate esses novos gremlins ardilosos para ganhar reputação e garantir recompensas cobiçadas. Visite a estátua de goblin no centro de Kyovashad para começar sua caçada e ganhar recompensas. Das 15h do dia 4 às 15h do dia 11 de março (horário de Brasília), uma variedade de goblins vai causar o caos em Santuário por cada cidade e pântano. Os goblins se multiplicaram como, bem, goblins. Conforme você progride pela trilha de reputação, suas chances de cortá-los de suas bolsas de tesouro aumentarão. Cace-os em cada dificuldade, no mundo aberto e nas mais profundas masmorras e pelos Reinos Eterno e de Temporada. Enquanto a Marcha dos Goblins estiver ativa, haverá uma chance maior de ver grupos de Goblins do Tesouro maiores, encontrar Altares da Cobiça e ver mais Goblins do Tesouro ao enfrentar o chefe do mundo Avareza, o Amaldiçoado pelo Ouro. Apresentando novas variantes de Goblins Das profundezas dos abismos e covis esquecidos do subterrâneo de Santuário, os goblins estão mudando e se diversificando. O povo da cidade fala sobre criaturas estranhas e maravilhosas, completas com sacos cheios de abundância. Parece que essas novas variantes de goblin são mais raras que as que carregam sacos marrons, então fique de olho para ter um vislumbre delas correndo pelas matas."',
      },
    ],
  },
  {
    id: 'h3',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/sv/SVR21D7N3N831739210541359.png',
    datePost: format(new Date(2024, 5, 20), 'dd MMMM, yyyy', { locale: ptBR }),
    title: 'Ganhe Dádivas da Árvore na Bênção da Mãe',
    subtitle:
      'Prepare-se para um evento especial que trará recompensas únicas para os jogadores',
    content: [
      {
        id: 'paragraph',
        text: '“Abaixo de velhos galhos, está pendurada a fruta-coração, inchada de ódio. Que ela exploda e inunde riachos e tocas.”- Lilith, Louvada Mãe Erga-se, viajante, e encare com triunfo sua pilha de espólios: a Bênção da Mãe voltou sob o olhar irascível da Árvore dos Lamentos! Abundância de bênçãos: tesouros de Dádivas da Árvore A influência da Árvore dos Lamentos se expandiu, com suas raízes revolvendo para encontrar as Cabeças Fugitivas. De 18 a 25 de fevereiro, enquanto a Bênção da Mãe estiver ativa, sempre que oferecer seus Favores Sombrios, você também receberá um tesouro adicional de Dádiva da Árvore. O conteúdo dele, um tesouro da Coleção Caótica, é imprevisível, como o nome deixa claro. São diversos itens para você aproveitar. Além dos tesouros extras, quando a Bênção da Mãe estiver ativa, todos os jogadores ganharão 35% de experiência e 50% de ouro a uma taxa multiplicativa. Lilith abençoa todos os seus filhos, já que esse bônus se aplica aos Reinos de Temporada e Eterno e a todas as dificuldades. O bônus é cumulativo, então combine-o com Elixires e a Urna da Agressão para potencializar seus ganhos de experiência enquanto mata monstros. Use esse bônus para galgar o Passe de Batalha e chegar aos níveis mais altos das dificuldades com rapidez impressionante, além concluir sua Jornada de Temporada para obter Dorian, o Corvo, e subir o nível de vários personagens até o máximo. Para quem tiver curiosidade sobre onde encontrar essa dádiva, procure o ícone no jogo acima da sua barra de experiência. Ele indica a taxa aumentada de ganho de ouro e experiência. A crueldade da Louvada Mãe é igualada por sua generosidade, mas não por muito tempo. Prepare-se, atice o fogo e convoque seus companheiros mais perspicazes para dizimar demônios com fervor renovado. Ascenda a um novo patamar se beneficiando da generosidade compartilhada da Louvada Mãe e da Árvore dos Lamentos!"',
      },
    ],
  },
  {
    id: 'h4',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/o5/O5MQH0N8CG731737745724501.jpg',
    datePost: format(new Date(2024, 5, 20), 'dd MMMM, yyyy', { locale: ptBR }),
    title:
      'Santuário é um lugar volátil: o perigo espreita em cada canto, e o retorno de Mefisto trouxe uma nova era de provações',
    subtitle:
      'Prepare-se para um evento especial que trará recompensas únicas para os jogadores',
    content: [
      {
        id: 'paragraph',
        text: 'Santuário é um lugar volátil: o perigo espreita em cada canto, e o retorno de Mefisto trouxe uma nova era de provações para os desafortunados que chamam essas terras de lar. Embora os habitantes tenham pouca esperança, histórias incríveis passadas de geração em geração são uma fagulha da verdade em meio à escuridão. As Sete Noivas da Serpente de David A. Rodriguez No coração de Hawezar, havia um vilarejo. A cada sete anos, o povo desse vilarejo sacrificava suas mulheres para saciar a fome da Grande Serpente. Porém, quando o nome de Belith foi chamado para o abate, ela roubou a faca de poda da mãe e abriu um novo caminho para Hawezar... com magia e sangue. Leia As Sete Noivas da Serpente ou ouça o audiobook narrado por Ouna, uma integrante do Conciliábulo a quem você se aliará na Temporada da Bruxaria!',
      },
    ],
  },
  {
    id: 'h5',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/8o/8OXNBITTFXJC1737745034643.png',
    datePost: format(new Date(2024, 5, 20), 'dd MMMM, yyyy', { locale: ptBR }),
    title: 'Busque a Fortuna Celestial no Despertar Lunar',
    subtitle:
      'A aguardadíssima jornada celestial voltou! Das 15h do dia 4 às 15h do dia 18 de fevereiro (horário de Brasília)',
    content: [
      {
        id: 'paragraph',
        text: 'A aguardadíssima jornada celestial voltou! Das 15h do dia 4 às 15h do dia 18 de fevereiro (horário de Brasília), os jogadores dos Reinos de Temporada e do Eterno poderão aproveitar o luar do evento Despertar Lunar. Um fenômeno misterioso está se manifestando nos altares de Santuário, encantando-os com um poder imenso e próspero. Os celebrantes acreditam que esse comportamento se deve a seus Ancestrais mandando bênçãos do além para comemorar esta ocasião jubilosa.Ative qualquer altar encontrado em Santuário (inclusive em Nahantu) para ganhar 100% de experiência extra (multiplicativo) por 2 minutos e um poder aperfeiçoado, tudo isso enquanto recebe Reputação do Favor Ancestral.',
      },
    ],
  },
  {
    id: 'h6',
    cover:
      'https://bnetcmsus-a.akamaihd.net/cms/blog_header/17/17DHB6R8TD5F1737049880876.jpg',
    datePost: format(new Date(2024, 5, 20), 'dd MMMM, yyyy', { locale: ptBR }),
    title: 'Fique por dentro da última live de atualização de desenvolvimento',
    subtitle:
      'Em 16 de janeiro, fizemos uma live de atualização de desenvolvimento que revelou o que esperar da Temporada da Bruxaria, que começa em 21 de janeiro, às 6h (horário de Brasília).',
    content: [
      {
        id: 'paragraph',
        text: 'Em 16 de janeiro, fizemos uma live de atualização de desenvolvimento que revelou o que esperar da Temporada da Bruxaria, que começa em 21 de janeiro, às 6h (horário de Brasília). Membros da equipe de desenvolvimento se reuniram para discutir o mistério das cabeças desaparecidas em uma nova série de missões de Temporada, novos itens únicos e aspectos lendários, o Arsenal e muito mais, A equipe mergulhou fundo nas mudanças de balanceamento, nas mudanças de qualidade de vida, no aprendizado com o feedback do Reino de Teste Público recente e muito mais. Se quiser assistir à live atualização de desenvolvimento completa para conferir todos os detalhes, veja o vídeo abaixo. As notas do patch 2.1. completas podem ser acessadas aqui. O post com os detalhes sobre a Temporada da Bruxaria está disponível aqui.',
      },
    ],
  },
];
