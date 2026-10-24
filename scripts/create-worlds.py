import bpy, bmesh, math, os, json, random
from mathutils import Vector
OUT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
bpy.ops.wm.read_factory_settings(use_empty=True)
s=bpy.context.scene; random.seed(84)
materials={}; meshes={}; groups={}; solids=[]; floors=[]; labels=[]
def mat(name,color,metal=0,rough=.6,emission=0):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True
 bs=m.node_tree.nodes.get('Principled BSDF');bs.inputs['Base Color'].default_value=(*color,1);bs.inputs['Metallic'].default_value=metal;bs.inputs['Roughness'].default_value=rough
 if emission:bs.inputs['Emission Color'].default_value=(*color,1);bs.inputs['Emission Strength'].default_value=emission
 materials[name]=m;return m
stone=mat('Chalk limestone',(.64,.62,.53));white=mat('Porcelain concrete',(.76,.79,.74));dark=mat('Graphite alloy',(.052,.072,.085),.8,.35)
steel=mat('Brushed titanium',(.27,.34,.38),.78,.31);glass=mat('Smoked sapphire glass',(.045,.15,.19),.6,.13)
wood=mat('Warm ash timber',(.32,.17,.075),0,.75);green=mat('Botanical jade',(.075,.28,.16));soil=mat('Garden soil',(.075,.055,.04))
copper=mat('Copper conduits',(.51,.22,.075),.8,.3);yellow=mat('Safety ochre',(.9,.53,.08),.3,.48)
cyan=mat('Ion blue luminance',(.04,.72,.9),.3,.25,2.4);pink=mat('Resonant amethyst',(.49,.14,.65),.4,.25,1.2)
snow=mat('Summit snow',(.78,.85,.83),.05,.86);rock=mat('Layered granite',(.24,.28,.26),.1,.92)
def group(name):
 o=bpy.data.objects.new(name,None);s.collection.objects.link(o);groups[name]=o;return o
city=group('CITY_LANDMARKS');lumen=group('LUMEN_LANDMARKS');machine=group('MACHINE_LANDMARKS')
def point(p):return (p[0],-p[2],p[1])
def primitive(kind,material,segments=12):
 key=(kind,material.name,segments)
 if key not in meshes:
  bm=bmesh.new()
  if kind=='box':bmesh.ops.create_cube(bm,size=1)
  elif kind=='cylinder':bmesh.ops.create_cone(bm,cap_ends=True,cap_tris=False,segments=segments,radius1=.5,radius2=.5,depth=1)
  elif kind=='cone':bmesh.ops.create_cone(bm,cap_ends=True,cap_tris=False,segments=segments,radius1=.5,radius2=0,depth=1)
  elif kind=='sphere':bmesh.ops.create_uvsphere(bm,u_segments=segments,v_segments=8,radius=.5)
  me=bpy.data.meshes.new(kind+' / '+material.name);bm.to_mesh(me);bm.free();me.materials.append(material);meshes[key]=me
  if kind in ['sphere','cylinder']:
   for p in me.polygons:p.use_smooth=True
 return meshes[key]
def obj(name,size,pos,material,parent,kind='box',rot=0):
 o=bpy.data.objects.new(name,primitive(kind,material,16 if kind=='cylinder' else 12));s.collection.objects.link(o);o.parent=parent;o.location=point(pos);o.scale=(size[0],size[2],size[1]);o.rotation_euler.z=-rot;return o
def box(name,size,pos,m=white,g=city,rot=0):return obj(name,size,pos,m,g,'box',rot)
def cyl(name,r,h,pos,m,g,segments=16):return obj(name,(r*2,h,r*2),pos,m,g,'cylinder')
def solid(world,x,z,w,d,h=4,bottom=0):solids.append(dict(world=world,x=x,z=z,w=w,d=d,h=h,bottom=bottom))
def floor(world,x,z,w,d,y):floors.append(dict(world=world,x=x,z=z,w=w,d=d,y=y))
def label(text,p,width,g,yaw=0):
 h=min(width/10,1.1);labels.append(dict(text=text,p=p,width=width,height=h,group=g.name,yaw=yaw))
 box('Wayfinding / physical sign',(width,h,.08),p,dark,g,yaw)
 data=bpy.data.curves.new('Wayfinding / '+text,'FONT');data.body=text;data.align_x='CENTER';data.align_y='CENTER';data.size=min(h*.52,width/max(1,len(text))*.9);data.extrude=.002;data.materials.append(white)
 o=bpy.data.objects.new('Wayfinding lettering / '+text,data);s.collection.objects.link(o);o.parent=g;o.location=point((p[0]+math.sin(yaw)*.047,p[1],p[2]+math.cos(yaw)*.047));o.rotation_euler=(math.pi/2,0,-yaw)

def beam(name,a,b,r,m,g):
 pa,pb=Vector(point(a)),Vector(point(b));o=bpy.data.objects.new(name,primitive('cylinder',m,12));s.collection.objects.link(o);o.parent=g;o.location=(pa+pb)*.5;o.scale=(r*2,r*2,(pb-pa).length);o.rotation_euler=(pb-pa).to_track_quat('Z','Y').to_euler();return o
def bench(x,y,z,g):
 box('Bench / timber seat',(3,.18,.65),(x,y+.5,z),wood,g)
 for a in [-1.1,1.1]:box('Bench / folded leg',(.13,.5,.6),(x+a,y+.25,z),dark,g)
 box('Bench / backrest',(3,.6,.1),(x,y+.9,z-.3),wood,g)
def plant(x,y,z,g):
 cyl('Planter / ceramic',.65,.7,(x,y+.35,z),white,g);cyl('Planter / soil',.59,.06,(x,y+.72,z),soil,g)
 for a in range(5):obj('Botanical frond',(.5,1.6,.5),(x+math.cos(a*2.4)*.28,y+1.3,z+math.sin(a*2.4)*.28),green,g,'sphere')

# A real, large campus, with open arcades, furnished classrooms and a robotics hall.
box('Academy / civic paving',(91,.18,87),(60,0,-235),stone);floor('city',60,-235,91,87,.09)
box('Academy / courtyard lawn',(30,.16,37),(60,.1,-236),green)
for x in [20,100]:
 box('Academy / outer masonry',(.7,19,73),(x,9.6,-235));solid('city',x,-235,.7,73,20)
 box('Academy / deep eaves',(21,1,77),(x+(-9 if x==100 else 9),20,-235),dark)
 for level in [7.2,13.2]:
  box('Academy / storey cornice',(20,.5,73),(x+(-9 if x==100 else 9),level,-235),white)
  for z in range(-266,-204,6):box('Academy / upper windows',(20,.8,3.8),(x+(-9 if x==100 else 9),level+2.4,z),glass)
 for z in range(-268,-200,8):
  box('Academy / arcade column',(.55,6,.55),(x+(-18 if x==100 else 18),3.1,z),white);solid('city',x+(-18 if x==100 else 18),z,.55,.55,6)
  box('Academy / external fin',(1.2,18,.24),(x+(-.8 if x==100 else .8),9.7,z),wood)
 # Ground floor remains open toward the courtyard; upper storeys have proper opaque spandrels.
 box('Academy / teaching gallery roof',(20,.5,73),(x+(-9 if x==100 else 9),6.1,-235),white)
 for z in [-257,-232,-208]:
  for dx in [5,13]:
   for dz in [-3,2,7]:
    px=x+(dx if x==20 else -dx);pz=z+dz
    box('Classroom / desk',(2.5,.13,1.25),(px,.87,pz),wood);solid('city',px,pz,2.5,1.25,1)
    for a in [-.95,.95]:box('Classroom / steel desk leg',(.075,.8,.9),(px+a,.43,pz),steel)
    box('Classroom / chair seat',(.6,.1,.6),(px,.48,pz+1.1),dark);box('Classroom / chair back',(.6,.65,.08),(px,.85,pz+1.35),green)
    for lx in [-.22,.22]:
     for lz in [-.22,.22]:box('Classroom / chair leg',(.045,.4,.045),(px+lx,.29,pz+1.1+lz),steel)
    if dz==2:
     box('Classroom / tablet stand',(.4,.04,.25),(px+.6,.98,pz),dark)
     box('Classroom / tablet screen',(.42,.34,.035),(px+.6,1.13,pz-.03),glass)
    box('Classroom / notebook',(.42,.03,.32),(px-.65,.96,pz),white)
  box('Classroom / display wall',(.2,2.2,6),(x+(1.1 if x==20 else -1.1),2.5,z+2),glass)
  box('Classroom / luminous lesson strip',(.22,.05,5.8),(x+(1.25 if x==20 else -1.25),1.5,z+2),cyan)
  label(['ORBITAL SCIENCE / a = v2 / r','DESIGN LAB / BUILD TOMORROW','ASTROBIOLOGY / LUMEN'][[-257,-232,-208].index(z)], [x+(1.3 if x==20 else -1.3),2.65,z+2],5.2,city,math.pi/2 if x==20 else -math.pi/2)
box('Academy / north research hall',(80,1,15),(60,12,-273),dark)
box('Academy / research rear wall',(80,12,.6),(60,6,-279));solid('city',60,-279,80,.6,12)
for x in [25,40,60,80,95]:box('Academy / research structure',(.5,12,.5),(x,6,-266),white)
for x in [43,53,67,77]:
 cyl('Robotics / demonstration pedestal',1.1,.55,(x,.4,-272),dark,city);solid('city',x,-272,2.2,2.2,1)
 obj('Robotics / articulated display',(1.1,2,1.1),(x,1.8,-272),steel,city,'sphere');beam('Robotics / arm',(x,2,-272),(x+1,3,-272),.16,copper,city)
box('Academy / entrance canopy',(48,.55,9),(60,5.8,-195),dark)
for x in [39,81]:box('Academy / entry pillar',(.65,5.8,.65),(x,2.9,-195));solid('city',x,-195,.65,.65,6)
for x in [45,75]:
 for z in [-250,-220,-204]:plant(x,.1,z,city)
for x in [49,71]:bench(x,.17,-217,city)
cyl('Academy / courtyard reflecting pool',6,.23,(60,.2,-239),glass,city)
for a in range(12):
 t=a*math.tau/12;beam('Academy / kinetic sundial',(60+math.cos(t)*3,.5,-239+math.sin(t)*3),(60+math.cos(t+.8)*1,6,-239+math.sin(t+.8)),.07,copper,city)
label('AURORA ACADEMY / SCIENCE & ART',[60,6.8,-190.4],32,city)
label('ROBOTICS LAB / OPEN CAMPUS',[60,4.4,-265.5],22,city)
label('CLASSROOMS / EAST & WEST',[60,4.1,-205],10,city)

# Continuous walkable terrain, not a distant backdrop. Same height formula is used in play.
def mountain(x,z):
 dx=x-500;dz=z+100;r=math.hypot(dx,dz);q=max(0,1-r/220)
 return q**1.4*182+q*(1-q)*(38*math.sin(dx*.043)*math.cos(dz*.037)+19*math.sin(dx*.093+dz*.061)+9*math.sin(dz*.13-dx*.075))
verts=[];faces=[];n=110
for j in range(n+1):
 for i in range(n+1):
  x=275+i*450/n;z=-325+j*450/n;verts.append(point((x,mountain(x,z)-.04,z)))
for j in range(n):
 for i in range(n):a=j*(n+1)+i;faces.extend([(a,a+n+2,a+1),(a,a+n+1,a+n+2)])
me=bpy.data.meshes.new('Aster massif / continuous terrain');me.from_pydata(verts,[],faces);me.materials.append(rock);me.materials.append(green);me.materials.append(snow);me.update()
ob=bpy.data.objects.new('Aster / mountain terrain',me);s.collection.objects.link(ob);ob.parent=city
for p in me.polygons:
 p.material_index=2 if p.center.z>151+math.sin(p.center.x*.1)*5 else 1 if p.center.z<38 and math.sin(p.center.x*.043)+math.cos(p.center.y*.035)>.4 else 0;p.use_smooth=True
# Terrain color varies by real strata and vegetation zones, instead of a flat grey mound.
attribute=me.color_attributes.new(name='Terrain color',type='FLOAT_COLOR',domain='CORNER')
base=[(.31,.28,.24),(.11,.26,.15),(.83,.88,.9)]
for face in me.polygons:
 for li in face.loop_indices:
  v=me.vertices[me.loops[li].vertex_index].co
  n=.82+.12*math.sin(v.x*.13+v.y*.05)+.1*math.cos(v.y*.22)+.07*math.sin(v.x*.53-v.y*.41)
  col=base[face.material_index];attribute.data[li].color=(*[min(1,c*n) for c in col],1)
for i,source in enumerate([rock,green,snow]):
 m=source.copy();m.name='Terrain / layered surface '+str(i);bs=m.node_tree.nodes.get('Principled BSDF');vc=m.node_tree.nodes.new('ShaderNodeVertexColor');vc.layer_name='Terrain color';m.node_tree.links.new(vc.outputs['Color'],bs.inputs['Base Color']);me.materials[i]=m
trail=[]
for i in range(260):
 u=i/259;r=215*(1-u);a=math.pi+u*math.tau*1.5;x=500+math.cos(a)*r;z=-100+math.sin(a)*r;y=mountain(x,z)+.05;trail.append((x,y,z))
 if i%3==0:
  for sign in [-1,1]:
   px=x+math.cos(a)*sign*2.2;pz=z+math.sin(a)*sign*2.2;py=mountain(px,pz)
   beam('Aster / trail marker',(px,py,pz),(px,py+1,pz),.06,dark,city)
   box('Aster / trail blaze',(.17,.24,.12),(px,py+.85,pz),yellow)
ribbon=[];rf=[]
for i,(x,y,z) in enumerate(trail):
 a=trail[max(0,i-1)];b=trail[min(len(trail)-1,i+1)];dx=b[0]-a[0];dz=b[2]-a[2];d=math.hypot(dx,dz) or 1
 for sign in [-1,1]:
  px=x-dz/d*sign*1.7;pz=z+dx/d*sign*1.7;ribbon.append(point((px,mountain(px,pz)+.085,pz)))
 if i:
  k=i*2;rf.extend([(k-2,k,k-1),(k-1,k,k+1)])
me=bpy.data.meshes.new('Aster / conforming switchback ribbon');me.from_pydata(ribbon,[],rf);me.materials.append(stone);me.update()
o=bpy.data.objects.new('Aster / continuous hiking trail',me);s.collection.objects.link(o);o.parent=city
for i,(x,z) in enumerate([(294,-96),(435,-245),(614,-67),(500,-100)]):
 y=mountain(x,z);cyl('Aster / lookout deck',5,.3,(x,y+.1,z),wood,city);floor('city',x,z,7,7,y+.25)
 for a in range(9):
  t=a*math.tau/9;beam('Lookout / cable post',(x+math.cos(t)*4.6,y,z+math.sin(t)*4.6),(x+math.cos(t)*4.6,y+1.2,z+math.sin(t)*4.6),.04,steel,city)
 bench(x,y+.3,z-2,city)
label('ASTER TRAIL / SUMMIT 182 m',[294,4,-96],12,city)
beam('Summit telescope / tripod',(500,182,-100),(500,184,-100),.12,steel,city)
beam('Summit telescope / barrel',(498.6,184,-100),(501.8,185,-100),.45,dark,city)
label('ASTER SUMMIT / CITY OBSERVATORY',[500,187,-100],13,city)
# Roadside sculptures and a covered approach make the outskirts feel inhabited.
for x in range(275,311,7):
 y=mountain(x,-96);box('Trailhead / pavers',(6,.15,7),(x,y,-96),stone)
for i in range(110):
 a=random.random()*math.tau;r=45+random.random()*165;x=500+math.cos(a)*r;z=-100+math.sin(a)*r;y=mountain(x,z)
 if y>140:continue
 cyl('Aster / alpine trunk',.18,4,(x,y+2,z),wood,city)
 for h,w in [(2.8,3.5),(4.2,2.8),(5.4,1.8)]:obj('Aster / alpine pine',(w,3.8,w),(x,y+h,z),green,city,'cone')

# LUMEN: a dome observatory, inhabited biology gardens and a unique resonant arch.
def th(x,z):
 fade=max(0,min(1,(x+92)/42));habitat=max(.0,min(1,math.hypot(x+46,z+3)/25))
 return (1.4*math.sin(x*.045)*math.sin(z*.036)+.7*math.sin(z*.071+x*.023))*fade*habitat
cx,cz=-110,-105;fy=2.2
box('Lumen / observatory foundation',(56,.7,38),(cx,fy-.35,cz),stone,lumen);floor('planet',cx,cz,56,38,fy)
# Sloped entrance apron avoids a vertical step into the foundation.
for i in range(18):box('Lumen / gentle approach',(12,.12,1.3),(cx,fy*(1-i/18),cz+19+i*1.1),stone,lumen)
for x in [cx-26,cx+26]:box('Lumen / observatory wall',(.7,9,36),(x,fy+4.5,cz),white,lumen);solid('planet',x,cz,.7,36,fy+9)
box('Lumen / instrument rear wall',(53,9,.7),(cx,fy+4.5,cz-18),white,lumen);solid('planet',cx,cz-18,53,.7,fy+9)
for x in [-20,-10,10,20]:
 box('Lumen / star chart desk',(4,.18,2),(cx+x,fy+1.1,cz+4),dark,lumen);solid('planet',cx+x,cz+4,4,2,fy+1.3)
 for k in range(3):box('Lumen / spectral map',(1,.08,1.2),(cx+x-1+k,fy+1.25,cz+4),cyan if k%2 else pink,lumen)
for i in range(19):
 a=math.pi*i/18
 for side in [-1,1]:beam('Lumen / dome rib',(cx+math.cos(a)*25,fy+9+math.sin(a)*15,cz+side*17),(cx+math.cos(a+math.pi/18)*25,fy+9+math.sin(a+math.pi/18)*15,cz+side*17),.16,steel,lumen) if i<18 else None
 for dz in [-17,0,17]:
  if i<18:beam('Lumen / open observatory vault',(cx+math.cos(a)*25,fy+9+math.sin(a)*15,cz+dz),(cx+math.cos(a+math.pi/18)*25,fy+9+math.sin(a+math.pi/18)*15,cz+dz),.1,white,lumen)
beam('Lumen / telescope mount',(cx,fy,cz-3),(cx,fy+4,cz-3),.65,steel,lumen)
beam('Lumen / telescope optical tube',(cx-4,fy+4,cz-3),(cx+5,fy+9,cz-3),1.4,dark,lumen);solid('planet',cx,cz-3,8,4,fy+10)
cyl('Lumen / telescope service ring',3.5,.2,(cx,fy+.1,cz-3),copper,lumen)
label('LUMEN / DEEP SKY OBSERVATORY',[cx,fy+6,cz+18],30,lumen)
for i in range(23):
 t=i/22*math.pi;x=-35+math.cos(t)*24;y=3+math.sin(t)*27;z=118
 o=box('Resonance / segmented ancient arch',(4.4,3.3,6),(x,y,z),stone,lumen);o.rotation_euler.y=-t
 o=box('Resonance / inlaid luminous veins',(4.5,.16,6.1),(x,y,z),pink,lumen);o.rotation_euler.y=-t
solid('planet',-59,118,5,7,6);solid('planet',-11,118,5,7,6)
for i in range(19):
 a=i*2.399;r=5+(i%5)*2.8;x=-35+math.cos(a)*r;z=118+math.sin(a)*r
 cyl('Resonance / tuning stone',.3,1+i%4,(x,(1+i%4)/2,z),pink,lumen)
label('THE SINGING GATE',[-54,2.4,141],6,lumen)
for x in [-56.4,-51.6]:beam('Singing gate / signpost',(x,0,141),(x,2.4,141),.06,steel,lumen)
# Sculptural biosphere terraces, with thick leaves, observation tables and irrigation.
for i in range(4):
 x=-139+i*6;z=67+i*2;y=.5+i*.25
 box('Biosphere / growing terrace',(5,.5,24),(x,y,z),white,lumen);box('Biosphere / soil bed',(4.6,.15,23),(x,y+.3,z),soil,lumen);solid('planet',x,z,5,24,y+.5)
 for j in range(7):
  pz=z-10+j*3;beam('Biosphere / irrigation pipe',(x-2,y+.5,pz),(x+2,y+.5,pz),.05,copper,lumen)
  for k in [-1,1]:
   obj('Biosphere / alien orchid leaf',(1.5,1.7,.6),(x+k,y+1.3,pz),green,lumen,'sphere',k*.6)
   obj('Biosphere / glowing blossom',(.65,.65,.65),(x+k,y+2.2,pz),cyan if j%2 else pink,lumen,'sphere')
for x in [-145,-111]:beam('Biosphere / arch footing',(x,0,51),(x,9,51),.18,steel,lumen)
beam('Biosphere / weather canopy',(-145,9,51),(-111,9,51),.2,steel,lumen)
label('EXOBOTANY / LIVING SPECIMENS',[-127,8,50],25,lumen)
bench(-128,0,89,lumen)

# NEXUS: layered panel construction, countersunk bolts, grilles, cable pits and warnings.
for ix in range(-15,16):
 for iz in range(-15,16):
  x=ix*12;z=iz*12
  if math.hypot(x,z)>193:continue
  m=steel if (ix+iz)%7==0 else dark
  box('Nexus / raised modular deck',(11.65,.13,11.65),(x,.065,z),m,machine)
  for dx,dz in [(-5,-5),(5,5)]:cyl('Nexus / flush fastener',.11,.025,(x+dx,.145,z+dz),copper,machine)
  if (ix*3+iz)%9==0:
   box('Nexus / service hatch',(4,.08,3),(x,.18,z),steel,machine)
   for a in [-1,1]:box('Nexus / hatch handle',(.6,.06,.14),(x+a,.25,z),dark,machine)
  if (ix+iz*2)%11==0:
   box('Nexus / ventilation recess',(3.8,.03,3),(x,.15,z),glass,machine)
   for k in range(9):box('Nexus / ventilation fin',(.11,.08,2.8),(x-1.6+k*.4,.21,z),copper,machine)
  if (ix+iz)%13==0:box('Nexus / embedded guide light',(8,.03,.075),(x,.16,z-5.3),cyan,machine)
for z in [-42,42]:
 for x in range(-174,175,8):
  if abs(x)<20:continue
  box('Nexus / caution chevron',(2.4,.03,.5),(x,.17,z),yellow,machine,math.pi/4)
# The industrial rim stands on a real annular deck instead of floating outside the port disk.
rv=[];rf=[];segments=160
for i in range(segments):
 a=i*math.tau/segments
 for radius in [198,270]:rv.append(point((math.cos(a)*radius,-.15,math.sin(a)*radius)))
for i in range(segments):
 k=i*2;nxt=((i+1)%segments)*2;rf.extend([(k,nxt,k+1),(k+1,nxt,nxt+1)])
me=bpy.data.meshes.new('Nexus / continuous industrial perimeter');me.from_pydata(rv,[],rf);me.materials.append(steel);me.update();o=bpy.data.objects.new('Nexus / industrial perimeter deck',me);s.collection.objects.link(o);o.parent=machine
for i in range(0,80,2):
 a=i*math.tau/80;h=24+i%5*9
 def rimpoint(dx,y,dz):return (math.cos(a)*245+dx*math.cos(a)-dz*math.sin(a),y,math.sin(a)*245+dx*math.sin(a)+dz*math.cos(a))
 for side in [-1,1]:
  for y in range(3,h-1,7):box('Nexus rim / illuminated service band',(9.8,.35,.08),rimpoint(0,y,side*7.07),cyan if (i+y)%3 else yellow,machine,a)
  for dx in [-5.7,0,5.7]:box('Nexus rim / facade mullion',(.16,h,.13),rimpoint(dx,h/2,side*7.1),dark,machine,a)
 for dx in [-5.8,5.8]:box('Nexus rim / rooftop duct',(.45,.6,13.5),rimpoint(dx,h+.2,0),copper,machine,a)
 if i%10==0:
  beam('Nexus rim / relay antenna',rimpoint(0,h,0),rimpoint(0,h+6,0),.08,steel,machine)
  obj('Nexus rim / relay head',(.7,.7,.7),rimpoint(0,h+6,0),cyan,machine,'sphere')
 for radius in [213,267]:
  box('Nexus rim / radial guide light',(4,.035,.12),(math.cos(a)*radius,-.12,math.sin(a)*radius),cyan,machine,a)

# Distinct shipyard, open to the visitor, with structural ribs and parked craft.
hx,hz=-128,40
for dx in [-16,16]:
 for dz in [-12,0,12]:
  box('Shipyard / gantry tower',(1.5,15,1.5),(hx+dx,7.6,hz+dz),steel,machine);solid('machine',hx+dx,hz+dz,1.5,1.5,16)
 for y in [5,10,15]:box('Shipyard / longitudinal truss',(.6,.6,29),(hx+dx,y,hz),yellow,machine)
for dz in [-12,0,12]:
 beam('Shipyard / pitched roof rib',(hx-16,15,hz+dz),(hx,22,hz+dz),.35,steel,machine);beam('Shipyard / pitched roof rib',(hx,22,hz+dz),(hx+16,15,hz+dz),.35,steel,machine)
box('Shipyard / rear tool wall',(30,5,.5),(hx,2.6,hz-14),dark,machine);solid('machine',hx,hz-14,30,.5,6)
for i in range(9):
 x=hx-12+i*3;box('Shipyard / equipment locker',(2.2,2.5,1),(x,1.4,hz-13),steel,machine)
 box('Shipyard / tool indicator',(.2,.2,1.05),(x,2.3,hz-13),cyan,machine)
for x in [hx-10,hx+10]:
 cyl('Shipyard / maintenance lift',3,.4,(x,.4,hz),yellow,machine)
 box('Shipyard / workbench',(4,1,2),(x,.8,hz+9),steel,machine);solid('machine',x,hz+9,4,2,1.4)
label('NEXUS AEROWORKS / FLIGHT DECK',[hx,9,hz+14],29,machine)
label('F / PILOT THE ION SKIMMER',[hx,3,hz+18],15,machine)

# Author a bespoke aerodynamic hull in Blender; the browser instances this exact mesh.
car=group('ANIM_HOVER_TEMPLATE');car.parent=machine;car.location=point((hx,2,hz))
v=[];f=[]
for y,w,z in [(0,1.05,2.6),(.35,1.3,2.2),(.65,1.15,1.9)]:
 v.extend([point((-w,y,z)),point((w,y,z)),point((w*.8,y,-2.8)),point((-w*.8,y,-2.8))])
for ring in range(2):
 for i in range(4):a=ring*4+i;b=ring*4+(i+1)%4;f.append((a,b,b+4,a+4))
f.extend([(0,3,2,1),(8,9,10,11)])
me=bpy.data.meshes.new('Ion skimmer / faceted hull');me.from_pydata(v,[],f);me.materials.append(white);o=bpy.data.objects.new('Ion skimmer / pressure hull',me);s.collection.objects.link(o);o.parent=car
obj('Ion skimmer / cockpit',(1.8,.8,2.5),(0,.9,-.1),glass,car,'sphere')
for sign in [-1,1]:
 box('Ion skimmer / wing',(1.4,.12,2),(sign*1.7,.3,.3),dark,car,sign*.15)
 for z in [-1.4,1.5]:
  cyl('Ion skimmer / turbine',.48,.28,(sign*1.65,.12,z),steel,car)
  cyl('Ion skimmer / blue thrust',.34,.12,(sign*1.65,-.06,z),cyan,car)
 box('Ion skimmer / running lamp',(.06,.09,2.5),(sign*1.15,.57,.3),cyan,car)
box('Ion skimmer / rear lamp',(1.5,.12,.08),(0,.4,2.55),pink,car)

# Fine surface relief, solar arrays, roof hardware and civic sports space.
for material in [stone,white,dark,steel,wood,rock,snow]:
 nodes=material.node_tree.nodes;links=material.node_tree.links;bs=nodes.get('Principled BSDF')
 coord=nodes.new('ShaderNodeTexCoord');noise=nodes.new('ShaderNodeTexNoise');noise.inputs['Scale'].default_value=24;noise.inputs['Detail'].default_value=3
 bump=nodes.new('ShaderNodeBump');bump.inputs['Strength'].default_value=.22;bump.inputs['Distance'].default_value=.08 if material==rock else .018
 links.new(coord.outputs['Object'],noise.inputs['Vector']);links.new(noise.outputs['Fac'],bump.inputs['Height']);links.new(bump.outputs['Normal'],bs.inputs['Normal'])
for x in [29,91]:
 for z in range(-266,-203,9):
  panel=box('Academy / photovoltaic module',(12,.12,5),(x,20.7,z),glass,city)
  for dx in range(-5,6):box('Academy / photovoltaic cell trace',(.035,.02,4.8),(x+dx,20.78,z),steel,city)
 for z in [-274,-208]:
  box('Academy / roof air handler',(4,1.8,3),(x,21.2,z),steel,city)
  for dx in [-.9,.9]:cyl('Academy / roof fan',.7,.12,(x+dx,22.15,z),dark,city)
# Full sports court with boundaries and hoops, beside the school approach.
box('Academy / athletics court',(36,.1,22),(-22,.02,-237),green,city)
for x in [-40,-4]:box('Athletics / sideline',(.12,.02,22),(x,.09,-237),white,city)
for z in [-248,-226]:box('Athletics / baseline',(36,.02,.12),(-22,.09,z),white,city)
box('Athletics / halfway line',(.12,.02,22),(-22,.09,-237),white,city)
for x in [-39,-5]:
 beam('Athletics / hoop mast',(x,.1,-237),(x,4,-237),.09,steel,city);solid('city',x,-237,.3,.3,4)
 box('Athletics / backboard',(.15,1.1,1.9),(x,3.5,-237),white,city)
 beam('Athletics / hoop support',(x,3,-237),(x+(1 if x< -20 else -1),3,-237),.05,copper,city)
for i in range(6):
 x=7;z=-198-i*1.6
 # Two bicycle wheels, frame triangle, saddle and handlebar; shared linked geometry.
 for dz in [-.6,.6]:
  o=cyl('Campus / bicycle wheel',.36,.07,(x,.48,z+dz),dark,city);o.rotation_euler.y=math.pi/2
 for a,b in [((x,.45,z-.6),(x,1.1,z)),((x,1.1,z),(x,.45,z+.6)),((x,.45,z-.6),(x,.45,z+.6))]:beam('Campus / bicycle frame',a,b,.035,yellow,city)
 box('Campus / bicycle saddle',(.27,.06,.25),(x,1.13,z),dark,city);beam('Campus / handlebar',(x-.2,1.3,z+.6),(x+.2,1.3,z+.6),.025,steel,city)
label('AURORA / ATHLETICS & OPEN CAMPUS',[-22,3.2,-225],20,city)

# Store collision and annotation metadata without user-specific paths.
os.makedirs(os.path.join(OUT,'models'),exist_ok=True)
metadata=dict(solids=solids,floors=floors,labels=labels,trail=trail)
with open(os.path.join(OUT,'src','landmark-layout.json'),'w',encoding='utf-8') as f:json.dump(metadata,f,separators=(',',':'))
s['worlds_revision']=8;s['description']='Native authored campus, walkable massif, exobotany gardens, observatory and aeroworks. Shared meshes preserve detail with instancing.'
lumen.location=point((6400,0,-4600));machine.location=point((13200,0,-9200))
s.render.engine='CYCLES';s.cycles.samples=16;s.render.resolution_x=1200;s.render.resolution_y=800;s.render.resolution_percentage=100
w=bpy.data.worlds.new('Atmosphere');w.use_nodes=True;s.world=w;w.node_tree.nodes.clear()
bg=w.node_tree.nodes.new('ShaderNodeBackground');bg.inputs[0].default_value=(.38,.5,.65,1);bg.inputs[1].default_value=.5
wo=w.node_tree.nodes.new('ShaderNodeOutputWorld');w.node_tree.links.new(bg.outputs[0],wo.inputs[0])
sun_data=bpy.data.lights.new('Sun','SUN');sun_data.energy=3;sun=bpy.data.objects.new('Sun',sun_data);s.collection.objects.link(sun);sun.rotation_euler=(.45,-.4,-.7)
cd=bpy.data.cameras.new('Architecture lens');cam=bpy.data.objects.new('Campus / native camera',cd);s.collection.objects.link(cam);cam.location=point((130,65,-155));cam.rotation_euler=(Vector(point((60,4,-235)))-cam.location).to_track_quat('-Z','Y').to_euler();cd.lens=30;s.camera=cam
collection=bpy.data.collections.new('14 | THREE WORLDS / BLENDER LANDMARKS');s.collection.children.link(collection)
for o in list(s.objects):
 if o.type in ['MESH','EMPTY','FONT']:
  collection.objects.link(o)
  for old in list(o.users_collection):
   if old!=collection:old.objects.unlink(o)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(OUT,'blender','AURORA_WORLDS.blend'),compress=False)
# Export only model roots: keep render camera and light out of the offline asset.
bpy.ops.object.select_all(action='DESELECT')
for o in s.objects:
 if o.type in ['MESH','EMPTY']:o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT,'models','worlds.glb'),export_format='GLB',use_selection=True,export_yup=True,export_apply=False,export_animations=False)
print('WORLDS V8',len(s.objects),'objects',len(meshes),'shared meshes',flush=True)
