export class GruposService {
  private grupos: {title: string}[] = [];

  addGrupo(grupo: {title: string} ){
    this.grupos.push(grupo);
  }

  getGrupos() {
    return this.grupos.slice();
  }
}
