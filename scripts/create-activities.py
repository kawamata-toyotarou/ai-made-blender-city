"""Native game props with shared beveled meshes; no startup-file dependency."""
import bpy,bmesh,math,os,json
from mathutils import Vector
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.read_factory_settings(use_empty=True);s=bpy.context.scene
col=bpy.data.collections.new('15 | CITY LIFE / GAMES AND POST');s.collection.children.link(col)
def p(v):return Vector((v[0],-v[2],v[1]))
def material(name,c,metal=0,rough=.5,emission=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*c,1);m.use_nodes=True;n=m.node_tree.nodes.get('Principled BSDF');n.inputs['Base Color'].default_value=(*c,1);n.inputs['Metallic'].default_value=metal;n.inputs['Roughness'].default_value=rough
 n.inputs['Emission Color'].default_value=(*c,1);n.inputs['Emission Strength'].default_value=emission;return m
dark=material('Activity / graphite',(.035,.06,.085),.65,.35);white=material('Activity / ceramic',(.63,.72,.72),.3,.52);copper=material('Activity / copper',(.55,.26,.09),.8,.3)
cyan=material('Activity / ion blue',(.06,.68,.85),.3,.25,2);jade=material('Activity / jade',(.12,.65,.38),.3,.3,1.2);violet=material('Activity / violet',(.52,.22,.8),.3,.25,1.5);gold=material('Activity / gold',(.9,.56,.12),.45,.35,1)
glass=material('Activity / display glass',(.025,.12,.15),.65,.13);stone=material('Activity / terrazzo',(.3,.34,.34),.15,.8)
cache={}
def geo(kind,m):
 key=(kind,m.name)
 if key in cache:return cache[key]
 bm=bmesh.new()
 if kind=='box':
  bmesh.ops.create_cube(bm,size=1);bmesh.ops.bevel(bm,geom=list(bm.edges),offset=.035,segments=2,affect='EDGES')
 elif kind=='cylinder':bmesh.ops.create_cone(bm,cap_ends=True,cap_tris=False,segments=24,radius1=.5,radius2=.5,depth=1)
 elif kind=='rock':bmesh.ops.create_icosphere(bm,subdivisions=2,radius=.5)
 elif kind=='sphere':bmesh.ops.create_uvsphere(bm,u_segments=20,v_segments=12,radius=.5)
 mesh=bpy.data.meshes.new(kind+' / '+m.name);bm.to_mesh(mesh);bm.free();mesh.materials.append(m);cache[key]=mesh;return mesh
def group(name,parent=None,pos=(0,0,0)):
 o=bpy.data.objects.new(name,None);col.objects.link(o);o.parent=parent;o.location=p(pos);return o
def part(name,size,pos,m,parent,kind='box',yaw=0):
 o=bpy.data.objects.new(name,geo(kind,m));col.objects.link(o);o.parent=parent;o.location=p(pos);o.scale=(size[0],size[2],size[1]);o.rotation_euler.z=yaw;return o
def ring(name,r,t,pos,m,parent):
 key=('ring',r,t,m.name)
 if key not in cache:
  v=[];f=[]
  for i in range(40):
   a=i*math.tau/40
   for j in range(8):b=j*math.tau/8;v.append(((r+t*math.cos(b))*math.cos(a),(r+t*math.cos(b))*math.sin(a),t*math.sin(b)))
  for i in range(40):
   for j in range(8):f.append((i*8+j,((i+1)%40)*8+j,((i+1)%40)*8+(j+1)%8,i*8+(j+1)%8))
  me=bpy.data.meshes.new(name);me.from_pydata(v,[],f);me.materials.append(m);me.update();cache[key]=me
 o=bpy.data.objects.new(name,cache[key]);col.objects.link(o);o.parent=parent;o.location=p(pos);return o
def text(body,pos,size,parent):
 d=bpy.data.curves.new(body,'FONT');d.body=body;d.size=size;d.align_x='CENTER';d.align_y='CENTER';d.extrude=.002;d.materials.append(white)
 o=bpy.data.objects.new('Native label / '+body,d);col.objects.link(o);o.parent=parent;o.location=p(pos);o.rotation_euler.x=math.pi/2
worlds={w:group('ACTIVITY_'+w.upper(),pos=o) for w,o in {'city':(0,0,0),'planet':(6400,0,-4600),'machine':(13200,0,-9200)}.items()}
terminals=[('city-post','city',-203,66,'RIVERSIDE POST'),('academy-post','city',68,-184,'ACADEMY / MAIL'),('lumen-post','planet',-113,12,'LUMEN / POST'),('garden-post','planet',-118,94,'BOTANICAL SAMPLES'),('nexus-post','machine',-124,8,'NEXUS / STAR MAIL')]
for ident,w,x,z,title in terminals:
 y=.16 if w=='machine' else 0;g=group('POST_'+ident,worlds[w],(x,y,z))
 part('Postal / inset paving',(3.6,.10,3),(0,-.05,0),stone,g);part('Postal / body',(.9,1.65,.7),(0,.85,0),dark,g)
 part('Postal / ceramic cover',(.94,.6,.75),(0,1.42,0),white,g);part('Postal / letter slot',(.64,.08,.035),(0,1.57,.4),glass,g)
 part('Postal / status strip',(.68,.035,.03),(0,1.73,.4),cyan,g);part('Postal / retrieval door',(.72,.65,.04),(0,.63,.39),copper,g)
 part('Postal / handle',(.21,.035,.06),(.2,.83,.43),white,g)
 for i in range(7):part('Postal / ventilation slit',(.04,.3,.03),(-.29+i*.09,.5,.42),dark,g)
 for i in range(3):part('Postal / envelope',(.27,.18,.015),(-.2+i*.2,1.1,.4),white,g)
 part('Postal / canopy',(2.6,.12,1.5),(0,2.6,0),dark,g)
 for dx in [-1.1,1.1]:part('Postal / canopy post',(.07,2.6,.07),(dx,1.3,-.5),copper,g)
 part('Postal / task plaque',(2.3,.32,.065),(0,2.34,.47),dark,g);text(title,(0,2.34,.51),.115,g)
 for dx in [-1.5,1.5]:part('Postal / marker',(.09,.08,2.5),(dx,.025,0),cyan,g)
g=group('TONE_CONSOLE',worlds['planet'],(-63,0,138));part('Resonance / base',(3.6,.2,2.2),(0,.1,0),stone,g)
part('Resonance / desk',(2.7,.3,1.5),(0,.95,0),dark,g);part('Resonance / pedestal',(1.9,.75,.85),(0,.5,0),white,g)
for i,m in enumerate([cyan,jade,violet,gold]):part('ANIM_TONE_PAD_'+str(i),(.48,.12,.6),(-.9+i*.6,1.17,.32),m,g)
for r in [1.1,.8,.5]:ring('Resonance / suspended harmonic ring',r,.035,(0,2.35,-.35),copper,g)
part('Resonance / core',(.42,.42,.42),(0,2.35,-.35),violet,g,'sphere');text('RESONANCE / LISTEN & REMEMBER',(0,3.65,-.32),.17,g)
g=group('CIRCUIT_CONSOLE',worlds['machine'],(-68,.16,-10));part('Power / service platform',(4,.18,3),(0,0,0),dark,g)
part('Power / console body',(2.7,1.3,1.1),(0,.75,0),white,g);part('Power / display',(1.7,1.4,.12),(0,1.45,.61),dark,g)
for i in range(9):part('ANIM_CIRCUIT_PAD_'+str(i),(.43,.32,.08),((i%3-1)*.52,1.9-(i//3)*.4,.72),cyan if i%2 else glass,g)
for dx in [-1.5,1.5]:part('Power / vertical conduit',(.12,2.6,.12),(dx,1.3,-.2),copper,g,'cylinder')
for i in range(9):part('Power / cooling grille',(.09,.45,.04),(-.64+i*.16,.55,.61),dark,g)
text('POWER ROUTING / 9 CIRCUITS',(0,2.7,.66),.16,g)
cards=[('campus','city',60,-214,.09),('trail','city',294,-96,None),('summit','city',500,-97,182.25),('telescope','planet',-120,-96,2.2),('gate','planet',-35,129,None),('orchid','planet',-128,92,0),('port','machine',-106,18,.16),('reactor','machine',-12,-38,.16),('skimmer','machine',-128,58,.16)]
def height(x,z):
 q=max(0,1-math.hypot(x-500,z+100)/220);return q**1.4*182+q*(1-q)*(38*math.sin((x-500)*.043)*math.cos((z+100)*.037)+19*math.sin((x-500)*.093+(z+100)*.061)+9*math.sin((z+100)*.13-(x-500)*.075))
for ident,w,x,z,y in cards:
 if y is None:y=height(x,z) if w=='city' else (1.4*math.sin(x*.045)*math.sin(z*.036)+.7*math.sin(z*.071+x*.023))*max(0,min(1,(x+92)/42))
 g=group('ANIM_CARD_'+ident,worlds[w],(x,y+1.25,z));part('Card / frame',(.44,.64,.1),(0,0,0),copper,g);part('Card / glass',(.37,.54,.12),(0,0,0),glass,g)
 part('Card / luminous glyph',(.2,.23,.13),(0,.06,0),cyan if w=='city' else violet if w=='planet' else gold,g)
 part('Card / caption line',(.24,.025,.13),(0,-.2,0),white,g);ring('Card / holographic halo',.44,.013,(0,0,0),cyan,g)
# Architectural depth replaces open bands with recessed glazing and sun screens.
wood=material('Activity / weathered cedar',(.29,.13,.055),.05,.74)
warm=material('Activity / warm soffit',(.95,.62,.3),.15,.3,2.5)
rock=material('Activity / layered granite',(.23,.25,.22),.08,.92)
decor={'solids':[],'contacts':[]}
for x,sign in [(38.35,-1),(81.65,1)]:
 for y in [9.5,15.5]:
  for i,z in enumerate(range(-267,-202,4)):
   part('Academy upgrade / recessed glazing',(.10,4.5,3.65),(x,y,z),glass,worlds['city'])
   for dz in [-1.9,1.9]:part('Academy upgrade / metal mullion',(.18,4.8,.12),(x-sign*.06,y,z+dz),dark,worlds['city'])
   if i%3!=1:part('Academy upgrade / cedar sun screen',(.5,4.8,.11),(x-sign*.22,y,z+1.3),wood,worlds['city'])
for x in [29,91]:
 for z in [-257,-232,-208]:
  part('Academy upgrade / soffit light',(8,.04,.14),(x,5.82,z),warm,worlds['city'])
  for dx in [-4,4]:
   for dz in [-3,2,7]:decor['contacts'].append({'world':'city','x':x+dx,'z':z+dz,'y':.115,'w':2.8,'d':1.8})
for x in [48,72]:
 g=group('Academy / courtyard planting',worlds['city'],(x,0,-209))
 part('Academy / raised cedar bed',(3,.55,1.4),(0,.365,0),wood,g);part('Academy / planting soil',(2.7,.08,1.1),(0,.65,0),dark,g)
 for i in range(14):
  px=-1.1+(i%7)*.36;pz=-.3+(i//7)*.6
  part('Academy / garden stem',(.025,.38,.025),(px,.87,pz),copper,g,'cylinder');part('Academy / garden blossom',(.17,.13,.17),(px,1.07,pz),gold if i%3 else violet,g,'sphere')
 decor['solids'].append({'world':'city','x':x,'z':-209,'w':3,'d':1.4,'h':.7,'bottom':0})
 decor['contacts'].append({'world':'city','x':x,'z':-209,'y':.115,'w':3.8,'d':2.2})
# Shared faceted outcrops retain the continuous hiking route and its markers.
trail=json.load(open(os.path.join(OUT,'src','landmark-layout.json'),encoding='utf-8'))['trail']
for i in range(28):
 a=i*2.399;r=70+(i%5)*25;x=500+math.cos(a)*r;z=-100+math.sin(a)*r;w=5+i%3*2;d=4+i%2*2;h=3+i%4*.9
 if any(math.hypot(x-t[0],z-t[2])<max(w,d)*.5+6 for t in trail):continue
 y=height(x,z);o=part('Aster upgrade / granite outcrop',(w,h,d),(x,y+h*.3,z),rock,worlds['city'],'rock',i*.37)
 decor['solids'].append({'world':'city','x':x,'z':z,'w':w*.75,'d':d*.75,'h':y+h*.8,'bottom':y-h*.2})
with open(os.path.join(OUT,'src','activity-decor.json'),'w',encoding='utf-8') as f:json.dump(decor,f,separators=(',',':'))
s['activity_revision']=9;s['description']='Native postal network, resonance game, power-routing console and observation cards.'
os.makedirs(os.path.join(OUT,'models'),exist_ok=True);bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'blender','AURORA_ACTIVITIES.blend'),compress=False)
bpy.ops.object.select_all(action='DESELECT')
for o in s.objects:
 if o.type in ['MESH','EMPTY']:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'models','activities.glb'),export_format='GLB',use_selection=True,export_yup=True,export_animations=False)
print('ACTIVITIES V9',len(s.objects),'objects',len(cache),'shared meshes',flush=True)
