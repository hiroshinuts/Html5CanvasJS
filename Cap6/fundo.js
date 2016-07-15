function Fundo(context, imagem){
	this.context = context;
	this.imagem = imagem;
	this.velocidade = 0;
	this.posicaoEmenda = 0;
}

Fundo.prototype = {
	atualizar: function() {

		//Atualizar a posicao de emenda
		this.posicaoEmenda += this.velocidade;

		//Emenda passou da posicao
		if(this.posicaoEmenda > this.imagem.height)
			this.posicaoEmenda = 0;

	},
	desenhar: function(){
		var img = this.imagem; 

		//Primeira copia do fundo
		var posicaoY = this.posicaoEmenda - img.height;
		this.context.drawImage(img, 0, posicaoY, img.width, img.height)
	}
}

